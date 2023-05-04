import styled, { css } from 'styled-components/native'

type DietSuccessColorProps = 'success' | 'failed'

type DietSuccessProps = {
  color: DietSuccessColorProps
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<DietSuccessProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xl}px;
    color: ${color === 'success'
      ? theme.colors.green_dark
      : theme.colors.red_dark};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_200};
  `}

  margin-top: 10px;
  text-align: center;
`

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_100};
  `}
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`
