import { ContainerHeader, Location } from './styles'
import { MapPin } from 'lucide-react'

import Logo from '../../assets/Logo.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <ContainerHeader>
      <Image src={Logo} alt="Logo" />

      <Location>
        <MapPin size={20} />
        Manaus, AM
      </Location>
    </ContainerHeader>
  )
}
