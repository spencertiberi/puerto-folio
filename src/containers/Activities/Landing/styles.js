import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Card from './Components/ActivityCard'

export const Heading = styled.h2`
  font-size: 24px;
  margin: 0 0 25px 0;
`

export const Row = styled(Flex)`
  flex-direction: row;
  margin-bottom: 36px;
`
export const Container = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`

export const Portfolio = styled(Card)`
  align-self: flex-end;
`
