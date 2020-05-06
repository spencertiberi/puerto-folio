import React from 'react'
import { Container, Image, Title, IconContainer } from './styles'

const Selection = ({ choosen, greyedOut, icon, title, updateChoice }) => {
  return (
    <Container onClick={() => updateChoice()}>
      {icon && (
        <IconContainer selected={choosen}>
          <Image src={icon} alt={title} />
        </IconContainer>
      )}
      <Title greyedOut={greyedOut}>{title}</Title>
    </Container>
  )
}

export default Selection
