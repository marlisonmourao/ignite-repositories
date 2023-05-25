import { TextInputProps } from 'react-native'
import { Controller } from 'react-hook-form'
import { Container, Error } from './styles'
import { Input } from '../Input'

type Props = TextInputProps & {
  control?: any
  name: string
  error: any
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />

      {error && <Error>{error}</Error>}
    </Container>
  )
}
