import React from 'react'
import { Container, IconCircle, Title } from './styles'

const ActivityCard = ({ title, image }) => (
  <Container>
    <IconCircle src={image} />
    <Title>{title}</Title>
  </Container>
)

export default ActivityCard
