import { InputHTMLAttributes } from 'react'
import { Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ ...rest }: InputProps) {
  return <Input {...rest} />
}
