import styled, { css } from 'styled-components/native'

export type ButtonDietTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY'
  isActive: boolean | undefined
}

export const Container = styled.TouchableOpacity<ButtonDietTypeStyleProps>`
  width: 160px;
  padding: 16px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ theme, type, isActive }) =>
    isActive
      ? css`
          background-color: ${type === 'PRIMARY'
            ? theme.colors.green_light
            : theme.colors.red_light};
          border: 1px solid
            ${type === 'PRIMARY'
              ? theme.colors.green_dark
              : theme.colors.red_mid};
        `
      : css`
          background-color: ${theme.colors.gray_600};
        `};
`

export const Boll = styled.View<ButtonDietTypeStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.colors.green_dark : theme.colors.red_dark};
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_100};
  `}
`
