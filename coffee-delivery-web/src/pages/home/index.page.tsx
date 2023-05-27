import { ContainerHome, Hero, InfoWrapper } from './styles'

import CoffeImg from '../../assets/CoffeImg.png'
import Image from 'next/image'

export default function Home() {
  return (
    <ContainerHome>
      <Hero>
        <InfoWrapper>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </p>
        </InfoWrapper>

        <Image src={CoffeImg} alt="" width={476} height={360} />
      </Hero>
    </ContainerHome>
  )
}
