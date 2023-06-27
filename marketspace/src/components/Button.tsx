import React from 'react'
import { HStack, Button as NativeBaseButton, Text } from 'native-base'
import { IconProps } from 'phosphor-react-native'
interface Props {
  variant?: 'black' | 'blue' | 'gray'
  title: string
  icon?: React.ComponentType<IconProps>
}

export function Button({ variant = 'gray', title, icon: Icon }: Props) {
  return (
    <NativeBaseButton
      flex={1}
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
      {Icon ? (
        <HStack space={2}>
          <Icon size={20} color="#FFFFFF" />

          <Text
            color={
              variant === 'blue' || variant === 'black'
                ? 'gray.700'
                : 'gray.200'
            }
            fontFamily="bold"
          >
            {title}
          </Text>
        </HStack>
      ) : (
        <Text
          color={
            variant === 'blue' || variant === 'black' ? 'gray.700' : 'gray.200'
          }
          fontFamily="bold"
        >
          {title}
        </Text>
      )}
    </NativeBaseButton>
  )
}
