import React from 'react'
import { Container, IconCircle, Title } from './styles'

const ActivityCard = ({ title, image, diameter, as, to, onClick, href }) => (
  <Container as={as} to={to} onCLick={onClick} diameter={diameter} href={href}>
    <IconCircle src={image} diameter={diameter} />
    <Title>{title}</Title>
  </Container>
)

export default ActivityCard
