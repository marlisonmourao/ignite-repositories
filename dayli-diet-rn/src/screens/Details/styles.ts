import styled, { css } from 'styled-components/native'

type BollColorProps = {
  color: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Content = styled.View`
  flex: 1;
  padding: 20px 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
  font-size: 20px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.md}px;
  `}

  margin: 8px 0px 24px;
`

export const DateAndHours = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
  `}

  margin-bottom: 8px
`

export const DateAndTimer = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
    font-size: ${theme.font_size.md}px;
  `}
`

export const Tag = styled.View`
  width: 144px;
  height: 34px;
  padding: 0px 16px;
  margin-top: 24px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_100};
    font-size: ${theme.font_size.sm}px;
  `}
`

export const Boll = styled.View<BollColorProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ color, theme }) =>
    color ? theme.colors.green_dark : theme.colors.red_dark};
`

export const ButtonWrapper = styled.View`
  width: 100%;
  gap: 9px;
  margin-top: auto;

  padding-bottom: 20px;
`
