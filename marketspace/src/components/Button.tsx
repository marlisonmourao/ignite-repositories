import { Button as NativeBaseButton, Text } from 'native-base'

interface Props {
  variant?: 'black' | 'blue' | 'gray'
  title: string
}

export function Button({ variant = 'gray', title }: Props) {
  return (
    <NativeBaseButton
      w="full"
      padding={3}
      borderRadius={6}
      bg={
        variant === 'gray'
          ? 'gray.500'
          : variant === 'blue'
          ? 'blue.400'
          : 'gray.100'
      }
      _pressed={{
        bg:
          variant === 'gray'
            ? 'gray.400'
            : variant === 'blue'
            ? 'blue.700'
            : 'gray.200',
      }}
    >
      <Text
        color={
          variant === 'blue' || variant === 'black' ? 'gray.700' : 'gray.200'
        }
        fontFamily="bold"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
