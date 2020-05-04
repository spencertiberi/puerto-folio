import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 281px;
  width: 100vw;
  padding-top: 75px;
  margin-bottom: 50px;
`

export const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -50;
`

export const Image = styled.img`
  display: flex;
  margin: ${(props) => props.verticalOffset || '0'}
    ${(props) => props.horizontalOffset || '18px'} 0
    ${(props) => props.horizontalOffset && '0'};
`

export const Row = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`
