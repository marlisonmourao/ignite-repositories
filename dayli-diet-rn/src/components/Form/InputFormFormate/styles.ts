import styled, { css } from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View`
  width: 100%;
`

export const InputMaskForm = styled(TextInputMask)`
  width: 100%;
  border-radius: 6px;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md}px;
  `}
`

export const Input = styled(TextInputMask)`
  width: 100%;
  border-radius: 6px;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.md}px;
  `}
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.red_dark};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  margin: 7px 0;
`
