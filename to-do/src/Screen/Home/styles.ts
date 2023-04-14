import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ebebeb;
`;

export const Header = styled.View`
  background-color: #8257e5;
  height: 150px;
  width: 100%;
`;

export const Content = styled.View`
  margin-top: -25px;
  padding: 0 24px;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  padding: 64px 24px;
`

export const Logo = styled.Image`
  width: 64px;
  height: 24px;
`

export const Label = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
`

export const TaskCount = styled.Text`
  font-weight: bold;
`

export const InputWrapper = styled.View`
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;

  margin-bottom: 32px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 56px;

  font-size: 15px;

  padding-left: 20px;
`

export const ButtonSubmit = styled.TouchableOpacity`
`

