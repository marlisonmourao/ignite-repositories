import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

import {
  Container,
  Icon,
  IconLeft,
  Label,
  Porcent,
  PorcentWrapper,
} from './styles'

type Props = TouchableOpacityProps & {
  porcent: string
  success: boolean
  variant?: 'primary' | 'secondary'
}

export function PorcentCard({
  porcent,
  success = true,
  variant = 'primary',
  ...rest
}: Props) {
  const { colors } = useTheme()

  return (
    <Container success={success} activeOpacity={0.7} {...rest}>
      <PorcentWrapper>
        <Porcent>{porcent}%</Porcent>
        <Label>das refeições dentro da dieta</Label>
      </PorcentWrapper>

      {variant === 'secondary' && (
        <IconLeft>
          <ArrowLeft
            size={24}
            color={success ? colors.green_dark : colors.red_dark}
          />
        </IconLeft>
      )}

      {variant === 'primary' && (
        <Icon>
          <ArrowUpRight
            size={24}
            color={success ? colors.green_dark : colors.red_dark}
          />
        </Icon>
      )}
    </Container>
  )
}
