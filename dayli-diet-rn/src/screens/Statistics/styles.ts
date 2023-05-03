import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Title = styled.Text`
  text-align: center;

  margin-top: 32px;
  margin-bottom: 39px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`

export const Main = styled.View`
  flex: 1;
  padding: 0 24px;
`

export const Sequence = styled.View`
  width: 100%;
  gap: 8px;
  padding: 16px 0;

  background-color: ${({ theme }) => theme.colors.gray_600};
  margin-bottom: 12px;
`

export const NumberSequence = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
  text-align: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
  `}
  text-align: center;
`

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`
