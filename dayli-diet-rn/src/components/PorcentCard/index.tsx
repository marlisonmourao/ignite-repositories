import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Icon, Label, Porcent, PorcentWrapper } from './styles'

import { ArrowUpRight } from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
  porcent: string
  success: boolean
}

export function PorcentCard({ porcent, success }: Props) {
  const { colors } = useTheme()

  return (
    <Container success={success} activeOpacity={0.7}>
      <PorcentWrapper>
        <Porcent>{porcent}%</Porcent>
        <Label>das refeições dentro da dieta</Label>
      </PorcentWrapper>
      <Icon>
        <ArrowUpRight size={24} color={colors.green_dark} />
      </Icon>
    </Container>
  )
}
