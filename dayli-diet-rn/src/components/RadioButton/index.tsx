import { TouchableOpacityProps } from 'react-native'
import { Boll, ButtonText, Container, ButtonDietTypeStyleProps } from './styles'

type Props = TouchableOpacityProps &
  ButtonDietTypeStyleProps & {
    title: string
    isActive: boolean | undefined
  }

export function RadioButton({ isActive, type, title, ...rest }: Props) {
  return (
    <Container isActive={isActive} type={type} {...rest}>
      <Boll isActive={isActive} type={type} />
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}
