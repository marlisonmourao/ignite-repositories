import {
  ContainerHeader,
  IconWrapper,
  Location,
  LocationIcon,
  Notification,
} from './styles'
import { MapPin, ShoppingCart } from 'lucide-react'

import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/useCartContex'

export default function Header() {
  const { numberNotification } = useCartContext()

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
          {/* 
          {numberNotification > 0 && (
            <Notification>
              <span>{numberNotification} 3</span>
            </Notification>
          )} */}

          <Notification>
            <span>{numberNotification}</span>
          </Notification>
        </IconWrapper>
      </Location>
    </ContainerHeader>
  )
}
