import { Container, Logo, Photo, UserPhotoContainer } from './styles'

import LogoImg from '@assets/Logo.png'

export function UserAndLogo() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <UserPhotoContainer>
        <Photo source={{ uri: 'https://github.com/marlisonmourao.png' }} />
      </UserPhotoContainer>
    </Container>
  )
}
