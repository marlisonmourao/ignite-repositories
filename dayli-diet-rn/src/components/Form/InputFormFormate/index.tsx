import { Controller } from 'react-hook-form'
import { Container, Error, InputMaskForm } from './styles'
import { TextInputMaskProps } from 'react-native-masked-text'

type Props = TextInputMaskProps & {
  control?: any
  name: string
  error: any
}

export function InputFormFormated({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputMaskForm onChangeText={onChange} value={value} {...rest} />
        )}
      />

      {error && <Error>{error}</Error>}
    </Container>
  )
}
