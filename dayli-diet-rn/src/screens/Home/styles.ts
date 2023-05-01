import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 0 24px;

  margin-top: ${getStatusBarHeight() + 36}px;
`
