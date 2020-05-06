import React from 'react'
import { LittleButton, Container, Label } from './styles'

const ProjectCard = ({ title, to }) => (
  <Container>
    <Label>{title}</Label>
    <LittleButton as="a" href={to} download>
      View
    </LittleButton>
  </Container>
)

export default ProjectCard
