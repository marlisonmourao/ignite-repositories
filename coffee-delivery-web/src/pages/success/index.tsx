import { useEffect, useState } from 'react'
import { DollarSign, MapPin, Timer } from 'lucide-react'
import {
  ContainerCheckout,
  ContainerOrderInfo,
  ImageSuccessContainer,
  InforContainer,
  Label,
  OrderInfo,
  Title,
} from './styles'

import SuccessLogo from '../../assets/success.png'
import Image from 'next/image'

interface PropsInfoProduct {
  city: string
  numberHouse: string
  neighborhood: string
  paymentMethods: string
  uf: string
  street: string
}

export default function Successs() {
  const [infoProduct, setInfoProduct] = useState<PropsInfoProduct>(
    {} as PropsInfoProduct,
  )

  useEffect(() => {
    const data = localStorage.getItem('@coffeeDelivery:dataCoffeeForm')

    if (data) {
      setInfoProduct(JSON.parse(data))
    }
  }, [])

  return (
    <ContainerCheckout>
      <Title>Uhu! Pedido confirmado</Title>
      <Label>Agora é só aguardar que logo o café chegará até você</Label>

      <ContainerOrderInfo>
        <OrderInfo>
          <InforContainer>
            <div>
              <MapPin fill="white" size={16} />
            </div>
            <p>
              Entrega em{' '}
              <span>{`${infoProduct.street}, ${infoProduct.numberHouse}`}</span>{' '}
              {`${infoProduct.city}, ${infoProduct.uf}`}
            </p>
          </InforContainer>

          <InforContainer variant="primary">
            <div>
              <Timer fill="white" color="white" size={16} />
            </div>
            <p>
              Previsão de entrega <br /> <span> 20 min - 30 min</span>
            </p>
          </InforContainer>

          <InforContainer variant="secondary">
            <div>
              <DollarSign color="white" size={16} />
            </div>
            <p>
              Pagamento na entrega <br />
              <span> {infoProduct.paymentMethods}</span>
            </p>
          </InforContainer>
        </OrderInfo>

        <ImageSuccessContainer>
          <Image src={SuccessLogo} alt="Sucesso" />
        </ImageSuccessContainer>
      </ContainerOrderInfo>
    </ContainerCheckout>
  )
}
