import { Heading, Image, ScrollView, Text, VStack } from 'native-base'

import LogoImg from '@assets/logo.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Signin() {
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack
        flex={1}
        px={16}
        pt={paddingTop}
        pb={16}
        alignItems="center"
        justifyContent="center"
        bg="gray.600"
      >
        <Image source={LogoImg} alt="logo da aplicação" />
        <Heading mt={7}>marketspace</Heading>
        <Text mb={50}>Seu espaço de compra e venda</Text>

        <Text
          lineHeight="md"
          fontSize="sm"
          fontFamily="regular"
          color="gray.200"
        >
          Acesse sua conta
        </Text>

        <VStack space={4} mt={4} mb={8}>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" secureText />
        </VStack>

        <Button variant="blue" title="Entrar" />

        <VStack w="full" space={4} mt={24} alignItems="center">
          <Text color="gray.200" fontFamily="regular" fontSize="sm">
            Ainda não tem acesso?
          </Text>

          <Button variant="gray" title="Criar uma conta" />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
