import styled, {css} from "styled-components/native";

interface PropsButtonActive {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
  background: #FFFFFF;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;
  margin-bottom: 15px;
`;

export const ButtonCheck = styled.TouchableOpacity<PropsButtonActive>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  border: 1.5px solid #b2b2b2;

  ${({ active }) => css`
    background-color: ${active ? '#1DB863' : 'transparent'};
  `}
`;

export const Message = styled.View`
  width: 90%;
  padding: 0 15px;
  align-items: center;
`;

export const TaskMessage = styled.Text<PropsButtonActive>`
  font-size: 14px;
  line-height: 17px;
  flex-wrap: wrap;

  font-weight: 500;

  color: #666666;

  ${({ active }) => css`
    color: ${active ? "#1DB863" : "#666666"};
    text-decoration: ${active ? "line-through" : "none"};
  `}
`;