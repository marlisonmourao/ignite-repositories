import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_500};

  height: 132px;
  padding: ${getStatusBarHeight() + 29}px 24px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`

export const Box = styled.View`
  width: 24px;
  height: 24px;
`
