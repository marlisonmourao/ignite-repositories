import { useState } from 'react'
import { Eye, EyeSlash } from 'phosphor-react-native'
import {
  Box,
  IInputProps,
  Input as NativeBaseInput,
  useTheme,
} from 'native-base'
import { TouchableOpacity } from 'react-native'

interface Props extends IInputProps {
  secureText?: boolean
}

export function Input({ secureText, ...rest }: Props) {
  const { colors } = useTheme()

  const [isVisible, setIsVisible] = useState(false)

  return (
    <Box
      w="full"
      flexDirection="row"
      borderRadius={6}
      borderWidth={0}
      bg="gray.700"
      position="relative"
    >
      <NativeBaseInput
        w="full"
        h={14}
        borderWidth={0}
        borderRadius={6}
        bg="gray.700"
        _focus={{
          borderWidth: 1,
          borderColor: 'gray.300',
          bg: 'gray.700',
        }}
        secureTextEntry={isVisible}
        {...rest}
      />

      {secureText && (
        <Box position="absolute" right={4} top={4}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <EyeSlash color={colors.gray[300]} />
            ) : (
              <Eye color={colors.gray[300]} />
            )}
          </TouchableOpacity>
        </Box>
      )}
    </Box>
  )
}
