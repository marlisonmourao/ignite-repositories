import { VStack } from 'native-base'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HeaderUser } from '@components/HeaderUser'
import { Sell } from '@components/Sell'

export function Home() {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 20

  return (
    <VStack flex={1} bg="gray.600" pt={paddingTop} px={6}>
      <HeaderUser />
      <Sell />
    </VStack>
  )
}
