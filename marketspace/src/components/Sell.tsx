import { TouchableOpacity } from 'react-native'
import { HStack, Text, VStack, useTheme } from 'native-base'
import { ArrowRight, Tag } from 'phosphor-react-native'

export function Sell() {
  const { colors } = useTheme()

  return (
    <VStack mt={8}>
      <Text fontFamily="regular" color="gray.300" fontSize="sm">
        Seus produtos anunciados para venda{' '}
      </Text>

      <HStack
        py={3}
        px={4}
        mt={3}
        borderRadius={6}
        space={54}
        alignItems="center"
        bg="blue.100"
      >
        <HStack alignItems="center" space={4}>
          <Tag color={colors.blue[700]} />

          <VStack>
            <Text fontFamily="bold" color="gray.200" fontSize="xl">
              4
            </Text>
            <Text fontFamily="regular" color="gray.200" fontSize="xs">
              anúncios ativos
            </Text>
          </VStack>
        </HStack>

        <TouchableOpacity activeOpacity={0.7}>
          <HStack space={2} alignItems="center">
            <Text fontFamily="bold" color="blue.700" fontSize="sm">
              Meus anúncios
            </Text>
            <ArrowRight color={colors.blue[700]} />
          </HStack>
        </TouchableOpacity>
      </HStack>
    </VStack>
  )
}
