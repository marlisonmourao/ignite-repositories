import { Avatar, HStack, Text, VStack } from 'native-base'
import { Button } from './Button'
import { Plus } from 'phosphor-react-native'

export function HeaderUser() {
  return (
    <HStack>
      <Avatar
        borderWidth={2}
        borderColor="blue.400"
        source={{ uri: 'https://github.com/marlisonmourao.png' }}
      />
      <VStack ml={3} w={125}>
        <Text fontSize="md" fontFamily="regular" color="gray.100">
          Boas vindas,
        </Text>
        <Text fontSize="md" fontFamily="bold" color="gray.100">
          Marlison!
        </Text>
      </VStack>

      <Button title="Criar anúncio" variant="black" icon={Plus} />
    </HStack>
  )
}
