import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 40px 24px 0px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const InputWrapper = styled.View`
  gap: 4px;
  margin-bottom: 24px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`

export const DateAndTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonWrapper = styled.View`
  width: 100%;
  gap: 5px;
  margin-top: 8px;
  margin-bottom: 148px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
