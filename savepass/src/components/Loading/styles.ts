import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #c4c4c4;
  align-items: center;
  justify-content: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(() => ({
  size: 30,
  color:  '#FFFFFF',
}))``