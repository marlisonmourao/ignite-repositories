import styled, {css} from "styled-components/native";

interface PropsButtonActive {
  active: boolean;
}

export const Container = styled.View<PropsButtonActive>`
  width: 100%;
  background-color: ${({ active }) => active ? '#c4c4c4' : '#FFFFFF'};
  opacity: ${({ active }) => active ? 0.60 : 1};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;
  margin-bottom: 15px;
`;

export const ButtonCheck = styled.TouchableOpacity<PropsButtonActive>`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  ${({ active }) => css`
    background-color: ${active ? "#1DB863" : "transparent"};
    border: ${active ? "none" : "1.5px solid #b2b2b2"};
  `}
`;

export const Message = styled.View`
  width: 80%;
  padding: 0 15px;
  align-items: center;
`;

export const TaskMessage = styled.Text<PropsButtonActive>`
  font-size: 14px;
  line-height: 17px;
  flex-wrap: wrap;

  align-self: flex-start;

  font-weight: 500;

  color: #666666;

  ${({ active }) => css`
    color: ${active ? "#1DB863" : "#666666"};
    text-decoration: ${active ? "line-through" : "none"};
  `}
`;

export const WrapperButtonIcon = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
`

export const Separator = styled.View`
  height: 24px;
  border-width: .3px;
  background-color: #c4c4c4;
`;