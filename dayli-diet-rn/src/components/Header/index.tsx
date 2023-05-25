import { useTheme } from 'styled-components'
import { Box, Container, Title } from './styles'

import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

type Props = {
  title: string
  onBack: () => void
  isSuccess?: boolean
}

export function Header({ title, onBack, isSuccess = true }: Props) {
  const { colors } = useTheme()

  return (
    <Container isSuccess={isSuccess}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onBack()}>
        <ArrowLeft size={24} color={colors.gray_200} />
      </TouchableOpacity>
      <Title>{title}</Title>
      <Box />
    </Container>
  )
}
