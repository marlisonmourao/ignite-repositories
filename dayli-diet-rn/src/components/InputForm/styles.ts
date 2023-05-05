import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.red_dark};
  font-size: ${({ theme }) => theme.font_size.sm}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  margin: 7px 0;
`
