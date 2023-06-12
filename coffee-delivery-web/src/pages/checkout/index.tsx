import { MapPin } from 'lucide-react'
import {
  AddressText,
  AddressTextContainer,
  AddressTextDescription,
  ButtonConfirm,
  CheckoutContainer,
  CheckoutContent,
  ContainerCheckout,
  Form,
  FormContent,
  InputWrapper,
  InputWrapperRow,
  PriceWrapper,
  Text,
  Title,
} from './styles'

import { Input } from '@/components/Input/styles'
import { CoffeeCardCheckout } from '@/components/CoffeeCardCheckout'

export default function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <FormContent>
          <Title>Complete seu pedido</Title>

          <Form>
            <div>
              <MapPin />
              <AddressTextContainer>
                <AddressText>Endereço de Entrega</AddressText>
                <AddressTextDescription>
                  Informe o endereço onde deseja receber seu pedido
                </AddressTextDescription>
              </AddressTextContainer>
            </div>

            <InputWrapper>
              <Input placeholder="CEP" varaint="secondary" />
              <Input placeholder="Rua" />

              <InputWrapperRow>
                <Input placeholder="Número" varaint="secondary" />
                <Input placeholder="Complemento" />
              </InputWrapperRow>

              <InputWrapperRow>
                <Input placeholder="Bairro" varaint="secondary" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" varaint="tertiary" />
              </InputWrapperRow>
            </InputWrapper>
          </Form>
        </FormContent>

        <div>
          <Title>Complete seu pedido</Title>
          <ContainerCheckout>
            <CoffeeCardCheckout />
            <CoffeeCardCheckout />

            <PriceWrapper>
              <Text>Total de itens</Text>
              <Text>R$ 29,70</Text>
            </PriceWrapper>

            <PriceWrapper>
              <Text>Entrega</Text>
              <Text>R$ 3,50</Text>
            </PriceWrapper>

            <PriceWrapper>
              <Text variant="alt">Total</Text>
              <Text variant="alt">R$ 33,20</Text>
            </PriceWrapper>
            <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
          </ContainerCheckout>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
