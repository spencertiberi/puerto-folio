import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Choices = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  width: 100%;
`
