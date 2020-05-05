import React from 'react'
import { Container, IconCircle, Title } from './styles'

const ActivityCard = ({ title, image, diameter, as, to, onClick }) => (
  <Container as={as} to={to} onCLick={onClick} diameter={diameter}>
    <IconCircle src={image} diameter={diameter} />
    <Title>{title}</Title>
  </Container>
)

export default ActivityCard
