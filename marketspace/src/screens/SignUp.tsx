import {
  Avatar,
  Box,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base'

import { PencilSimpleLine } from 'phosphor-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import LogoImg from '@assets/logo.png'
import userAvatar from '@assets/avatar.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignUp() {
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        bg="gray.600"
        px={16}
        alignItems="center"
        justifyContent="center"
        pt={paddingTop}
        pb={16}
      >
        <Image source={LogoImg} alt="logo da aplicação" w={60} h={12} />

        <Heading mt={5} mb={2} fontFamily="bold">
          Boas vindas!
        </Heading>
        <Text
          textAlign="center"
          color="gray.200"
          fontSize="sm"
          fontFamily="regular"
        >
          Crie sua conta e use o espaço para comprar {'\n'} itens variados e
          vender seus produtos
        </Text>

        <Pressable position="relative" mt={8} mb={4}>
          <Avatar
            borderWidth={2}
            borderColor="blue.400"
            size={88}
            source={userAvatar}
          />

          <Box
            bg="blue.400"
            position="absolute"
            p={3}
            borderRadius="full"
            right={0}
            bottom={0}
          >
            <PencilSimpleLine color="white" size={16} />
          </Box>
        </Pressable>

        <VStack space={4} mb={6}>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" secureText />
          <Input placeholder="Confirmar senha" secureText />
        </VStack>

        <Button variant="black" title="Criar" />

        <VStack w="full" space={4} mt={12} alignItems="center">
          <Text color="gray.200" fontFamily="regular" fontSize="sm">
            Já tem uma conta?
          </Text>

          <Button variant="gray" title="Ir para o login" />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
