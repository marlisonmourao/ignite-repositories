import styled, { css } from 'styled-components/native'

type ContainerColorProps = {
  success: boolean
}

export const Container = styled.TouchableOpacity<ContainerColorProps>`
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, success }) =>
    success ? theme.colors.green_light : theme.colors.red_light};

  margin-top: 36px;
  padding: 20px 0 40px;

  position: relative;
`

export const PorcentWrapper = styled.View`
  gap: 2px;
`

export const Porcent = styled.Text`
  font-size: 32px;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`

export const Label = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
  `}
`

export const Icon = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
`
