import { Container, Logo, Photo } from './styles'

import LogoImg from '@assets/Logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Photo source={{ uri: 'https://github.com/marlisonmourao.png' }} />
    </Container>
  )
}
