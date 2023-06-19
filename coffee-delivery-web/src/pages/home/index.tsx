import {
  ContainerHome,
  ContainerImage,
  Hero,
  InfoWrapper,
  ItemsWrapper,
  Label,
  Products,
  ProductsItems,
} from './styles'
import Image from 'next/image'

import CoffeImg from '../../assets/CoffeImg.png'

import { ItemIcon } from '@/components/ItemIcon'
import { CoffeeCard } from '@/components/CoffeeCard'
import { iconsHero } from '@/utils/iconsHero'
import { dataCoffee } from '../../utils/dataCoffee'

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

        <ContainerImage>
          <Image src={CoffeImg} alt="" width={476} height={360} />
        </ContainerImage>
      </Hero>

      <Products>
        <Label>Nossos cafés</Label>

        <ProductsItems>
          {dataCoffee.map((item) => (
            <CoffeeCard key={item.id} data={item} />
          ))}
        </ProductsItems>
      </Products>
    </ContainerHome>
  )
}
