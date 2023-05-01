import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  align-items: center;
  justify-content: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: '#FFFFFF',
  size: 30,
}))``;