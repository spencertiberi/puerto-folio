import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Name = styled(Flex)`
  font-size: 12px;
  color: #ffffff;
  font-weight: bold;
  margin: 0 8px;
`

export const IconCircle = styled(Flex)`
  width: ${(props) => props.diameter || '42px'};
  height: ${(props) => props.diameter || '42px'};
  border: 3px solid ${(props) => props.color};
  border-radius: ${(props) => props.diameter || '42px'};
  background-color: #ffffff;
`

export const AvatarContainer = styled(Flex)`
  display: flex;
  flex-direction: ${(props) => (props.mirror ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: flex-start;
`

export const Container = styled(Flex)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
`
