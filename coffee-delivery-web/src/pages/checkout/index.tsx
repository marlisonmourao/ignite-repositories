import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CreditCard, DollarSign, Landmark, MapPin } from 'lucide-react'

import {
  AddressData,
  AddressText,
  AddressTextContainer,
  AddressTextDescription,
  ButtonConfirm,
  CheckoutContainer,
  CheckoutContent,
  ContainerCheckout,
  ErrorMessage,
  Form,
  FormContent,
  InputWrapper,
  InputWrapperRow,
  PaymentData,
  PriceWrapper,
  Text,
  Title,
  WrapperCreditCard,
} from './styles'

import { Input } from '@/components/Input/styles'
import { CoffeeCardCheckout } from '@/components/CoffeeCardCheckout'
import { PaymentCard } from '@/components/PaymentCard'
import { useCartContext } from '@/context/useCartContex'
import { formatMoney } from '@/utils/formatMoney'

const formSchema = z.object({
  cep: z.string().min(8, 'Informe um CEP válido'),
  street: z.string().min(1, 'Informe a rua'),
  numberHouse: z.string().min(1, 'Informe o numéro'),
  complement: z.string().min(1, 'Informe o complemento').optional(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
})

type typeFormSchema = z.infer<typeof formSchema>

export default function Checkout() {
  const [paymentMethods, setPaymentMethods] = useState('')

  const { dataCoffeeCard, setDataCoffeeCard, changeCartChangeItem } =
    useCartContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeFormSchema>({
    resolver: zodResolver(formSchema),
  })

  function handleSubmitForm(data: typeFormSchema) {
    const newData = {
      ...data,
      paymentMethods,
    }

    console.log(newData)
  }

  function handleAddCardPaymentMethods(title: string) {
    setPaymentMethods(title)
  }

  function handleIncreased(id: string) {
    changeCartChangeItem(id, 'increase')
  }

  function handleDecreased(id: string) {
    changeCartChangeItem(id, 'decrease')
  }

  async function handleOnRemove(id: string) {
    const data = await localStorage.getItem('coffeeDelivery:dataCoffeeCard')

    const parseData = JSON.parse(data!)

    const filtered = parseData.filter((item: any) => item.id !== id)

    localStorage.setItem(
      'coffeeDelivery:dataCoffeeCard',
      JSON.stringify(filtered),
    )

    setDataCoffeeCard(filtered)
  }

  const totalPrice = dataCoffeeCard.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <FormContent>
          <Title>Complete seu pedido</Title>

          <Form>
            <AddressData>
              <MapPin />
              <AddressTextContainer>
                <AddressText>Endereço de Entrega</AddressText>
                <AddressTextDescription>
                  Informe o endereço onde deseja receber seu pedido
                </AddressTextDescription>
              </AddressTextContainer>
            </AddressData>

            <InputWrapper>
              <Input
                placeholder="CEP"
                varaint="secondary"
                {...register('cep')}
              />
              {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}

              <Input placeholder="Rua" {...register('street')} />
              {errors.street && (
                <ErrorMessage>{errors.street.message}</ErrorMessage>
              )}

              <InputWrapperRow>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Input
                    placeholder="Número"
                    varaint="secondary"
                    {...register('numberHouse')}
                  />
                  {errors.numberHouse && (
                    <ErrorMessage>{errors.numberHouse.message}</ErrorMessage>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Input
                    placeholder="Complemento"
                    {...register('complement')}
                  />

                  {errors.complement && (
                    <ErrorMessage>{errors.complement.message}</ErrorMessage>
                  )}
                </div>
              </InputWrapperRow>

              <InputWrapperRow>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Input
                    placeholder="Bairro"
                    varaint="secondary"
                    {...register('neighborhood')}
                  />
                  {errors.neighborhood && (
                    <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Input placeholder="Cidade" {...register('city')} />
                  {errors.city && (
                    <ErrorMessage>{errors.city.message}</ErrorMessage>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Input
                    placeholder="UF"
                    varaint="tertiary"
                    {...register('uf')}
                  />

                  {errors.uf && (
                    <ErrorMessage>{errors.uf.message}</ErrorMessage>
                  )}
                </div>
              </InputWrapperRow>
            </InputWrapper>
          </Form>

          <PaymentData>
            <DollarSign />
            <AddressTextContainer>
              <AddressText>Pagamento</AddressText>
              <AddressTextDescription>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </AddressTextDescription>
            </AddressTextContainer>

            <WrapperCreditCard>
              <PaymentCard
                title="Cartão de crédito"
                icon={CreditCard}
                OnCreditCard={handleAddCardPaymentMethods}
                isActive={paymentMethods === 'Cartão de crédito'}
              />

              <PaymentCard
                title="Cartão de débito"
                icon={Landmark}
                OnCreditCard={handleAddCardPaymentMethods}
                isActive={paymentMethods === 'Cartão de débito'}
              />
              <PaymentCard
                title="Dinheiro"
                icon={DollarSign}
                OnCreditCard={handleAddCardPaymentMethods}
                isActive={paymentMethods === 'Dinheiro'}
              />
            </WrapperCreditCard>
          </PaymentData>
        </FormContent>

        <div>
          <Title>Complete seu pedido</Title>

          <ContainerCheckout>
            {dataCoffeeCard.map((coffee) => (
              <CoffeeCardCheckout
                key={coffee.id}
                banner={coffee.image}
                price={formatMoney(coffee.price * coffee.quantity)}
                title={coffee.title}
                quantity={coffee.quantity}
                onRemove={() => handleOnRemove(coffee.id)}
                onIncreased={() => handleIncreased(coffee.id)}
                onDecreased={() => handleDecreased(coffee.id)}
              />
            ))}

            <PriceWrapper>
              <Text>Entrega</Text>
              <Text>R$ 3,50</Text>
            </PriceWrapper>

            <PriceWrapper>
              <Text variant="alt">Total</Text>
              <Text variant="alt">R$ {formatMoney(totalPrice)}</Text>
            </PriceWrapper>

            <ButtonConfirm
              type="submit"
              onClick={handleSubmit(handleSubmitForm)}
            >
              Confirmar Pedido
            </ButtonConfirm>
          </ContainerCheckout>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
