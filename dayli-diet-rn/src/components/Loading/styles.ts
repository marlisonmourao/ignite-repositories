import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.red_light};

  align-items: center;
  justify-content: center;
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 18,
  color: theme.colors.gray_300,
}))``
