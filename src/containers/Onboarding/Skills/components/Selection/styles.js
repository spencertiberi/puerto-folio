import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  cursor: pointer;
  margin: 8px 0px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.primary
      : props.theme.colors.greyScale.offWhite};
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
`
export const Title = styled.div`
  display: flex;
  height: 38px;
  font-size: 16px;
  font-weight: 500;
  width: 166px;
  padding-left: 16px;
  color: ${(props) =>
    props.greyedOut
      ? props.theme.colors.greyScale.offWhite
      : props.theme.colors.primary};
`
