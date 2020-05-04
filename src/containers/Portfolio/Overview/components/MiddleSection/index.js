import React from 'react'
import { Container, Background, Image, Row } from './styles'
import pot from '../../../assets/pot.png'
import hat from '../../../assets/hat.png'
import wand from '../../../assets/wand.png'
import background from '../../../assets/middlebg.svg'

const TopSection = () => (
  <Container>
    <Background src={background} />
    <Row>
      <Image width="97px" src={hat} />
      <Image width="106px" src={pot} verticalOffset="10px" />
    </Row>
    <Image src={wand} width="48px" horizontalOffset="48px" />
  </Container>
)

export default TopSection
