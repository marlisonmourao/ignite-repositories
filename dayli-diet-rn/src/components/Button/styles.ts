import styled, { css } from 'styled-components/native'

export type ButtonColorProps = 'primary' | 'secondary'

type ButtonProps = {
  variant: ButtonColorProps
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 16px 0;
  border-radius: 6px;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'primary'
      ? theme.colors.gray_200
      : theme.colors.gray_700};

    border: ${variant === 'secondary'
      ? `1px solid ${theme.colors.gray_200}`
      : 'none'};
  `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 21px;
`

export const Title = styled.Text<ButtonProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${variant === 'primary'
      ? theme.colors.white
      : theme.colors.gray_100};
  `}
`
