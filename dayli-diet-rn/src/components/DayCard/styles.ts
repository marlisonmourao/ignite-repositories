import styled, { css } from 'styled-components/native'

type PropsCircleStatus = {
  success: boolean
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 16px 14px 12px;
  margin-bottom: 12px;

  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TimeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const Hours = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xs}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`

export const Separator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.gray_400};
`

export const FoodName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
  `}
`

export const CircleStatus = styled.View<PropsCircleStatus>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  background-color: ${({ theme, success }) =>
    success ? theme.colors.green_mid : theme.colors.red_mid};
`
