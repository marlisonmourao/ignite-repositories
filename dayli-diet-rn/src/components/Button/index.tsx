import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonColorProps } from './styles'

import { Plus, PencilSimpleLine } from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
  title: string
  variant?: ButtonColorProps
  checked?: boolean
}

export function Button({
  title,
  checked = true,
  variant = 'primary',
  ...rest
}: Props) {
  const Icon = checked ? Plus : PencilSimpleLine

  return (
    <Container variant={variant} {...rest}>
      <Icon color={variant === 'primary' ? '#fff' : '#000'} />
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
