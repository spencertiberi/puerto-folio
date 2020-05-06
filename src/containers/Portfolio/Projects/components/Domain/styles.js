import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Circle = styled(Flex)`
  width: 79px;
  height: 79px;
  border-radius: 79px;
  background-color: ${(props) =>
    props.theme.colors.portfolio[props.color].regular};
  align-items: center;
  justify-content: center;
`

export const Icon = styled.img`
  width: 54px;
  height: 54px;
`
