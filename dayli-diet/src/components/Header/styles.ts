import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const UserPhotoContainer = styled.View`
  border: 2px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 9999px;
`

export const Photo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
