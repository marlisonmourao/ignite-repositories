import styled, { css } from 'styled-components/native'

export const Container = styled.TextInput`
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
