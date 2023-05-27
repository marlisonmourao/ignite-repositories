import { ContainerHeader, IconWrapper, Location, LocationIcon } from './styles'
import { MapPin, ShoppingCart } from 'lucide-react'

import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <ContainerHeader>
      <Link href="/">
        <Image src={Logo} alt="Logo" />
      </Link>

      <Location>
        <LocationIcon href="">
          <MapPin size={22} />
          Manaus, AM
        </LocationIcon>

        <IconWrapper href="">
          <ShoppingCart size={22} fill="#C47F17" />
        </IconWrapper>
      </Location>
    </ContainerHeader>
  )
}
