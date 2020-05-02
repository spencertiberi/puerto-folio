import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : '#fff'};
  border: 1px solid ${(props) => props.theme.colors.greyScale.medium};
  border-radius: 8px;
  cursor: pointer;
  margin: 4px 0;
  padding: 5px 4px 5px 4px;
`
export const Image = styled.img`
  height: 20px;
  width: 20px;
`
export const Title = styled.div`
  padding-left: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.selected ? '#fff' : props.theme.colors.primary)};
  width: auto;
`
