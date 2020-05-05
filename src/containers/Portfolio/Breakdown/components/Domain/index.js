import React from 'react'
import { Container, Circle, Icon, Title } from './styles'

const Domain = ({ title, icon, color, offset }) => (
  <Container offset={offset}>
    <Title>{title}</Title>
    <Circle color={color}>
      <Icon src={icon} />
    </Circle>
  </Container>
)

export default Domain
