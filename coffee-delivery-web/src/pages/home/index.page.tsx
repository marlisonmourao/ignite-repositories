import {
  ContainerHome,
  Hero,
  InfoWrapper,
  ItemsWrapper,
  Label,
  Products,
} from './styles'
import Image from 'next/image'

import CoffeImg from '../../assets/CoffeImg.png'

import { ItemIcon } from '@/components/ItemIcon'
import { iconsHero } from '@/utils/iconsHero'

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

          <ItemsWrapper>
            {iconsHero.map((icon) => (
              <ItemIcon
                key={icon.id}
                name={icon.icon}
                variant={icon.variant}
                title={icon.title}
              />
            ))}
          </ItemsWrapper>
        </InfoWrapper>

        <Image src={CoffeImg} alt="" width={476} height={360} />
      </Hero>

      <Products>
        <Label>Nossos cafés</Label>
      </Products>
    </ContainerHome>
  )
}
