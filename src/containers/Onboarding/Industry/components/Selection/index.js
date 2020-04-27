import React from 'react'
import { Container, Image, Title } from './styles'

const Selection = ({ choosen, icon, title, updateChoice }) => {
  return (
    <Container
      selected={choosen}
      onClick={() => {
        updateChoice()
      }}
    >
      {icon && <Image src={icon} alt={title} />}
      <Title selected={choosen}>{title}</Title>
    </Container>
  )
}

export default Selection
