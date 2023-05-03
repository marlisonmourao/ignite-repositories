import styled, { css } from 'styled-components/native'

export type SuccessOrFailedColor = 'success' | 'failed'

type ContainerProps = {
  color: SuccessOrFailedColor
}

export const Container = styled.View<ContainerProps>`
  width: 50%;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;

  background-color: ${({ theme, color }) =>
    color === 'success' ? theme.colors.green_light : theme.colors.red_light};
`

export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}

  text-align: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
  `}

  text-align: center;
`
