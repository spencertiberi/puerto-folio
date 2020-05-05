import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import background from '../../../assets/bottombg.svg'

const Container = styled(Flex)`
  position: relative;
  height: 80px;
  width: 100vw;
`

const Background = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80vw;
  height: 288px;
  z-index: -50;
`

const Bottom = () => (
  <Container>
    <Background src={background} />
  </Container>
)

export default Bottom
