import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 0 24px;

  margin-top: ${getStatusBarHeight() + 36}px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_100};
    font-family: ${theme.font_family.regular};
  `}

  margin: 40px 0 8px
`

export const HeaderList = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.gray_100};
    font-family: ${theme.font_family.bold};
  `}

  margin-bottom: 8px
`
