import { ContainerHeader, IconWrapper, Location, LocationIcon } from './styles'
import { MapPin, ShoppingCart } from 'lucide-react'

import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <ContainerHeader>
      <Image src={Logo} alt="Logo" />

      <Location>
        <LocationIcon>
          <MapPin size={22} />
          Manaus, AM
        </LocationIcon>

        <IconWrapper>
          <ShoppingCart size={22} fill="#C47F17" />
        </IconWrapper>
      </Location>
    </ContainerHeader>
  )
}
