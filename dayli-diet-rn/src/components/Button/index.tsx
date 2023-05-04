import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonColorProps } from './styles'

import { Plus, PencilSimpleLine } from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
  title: string
  variant?: ButtonColorProps
  checked?: boolean
  iconVisible?: boolean
}

export function Button({
  title,
  checked,
  variant = 'primary',
  iconVisible = true,
  ...rest
}: Props) {
  const Icon = checked ? Plus : PencilSimpleLine

  return (
    <Container variant={variant} activeOpacity={0.7} {...rest}>
      {iconVisible && <Icon color={variant === 'primary' ? '#fff' : '#000'} />}
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
