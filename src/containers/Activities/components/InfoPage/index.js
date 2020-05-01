import React, { useEffect } from 'react'
import Button from '../../../../components/LinkButton'
import { Container, Text } from './styles'
import theme from '../../../../theme'
import PageWrapper from '../../../../components/PageWrapper'

const InfoPage = ({ text, to }) => {
  const bgColor = theme.colors.primary
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  })

  return (
    <PageWrapper dark>
      <Container>
        <Text>{text}</Text>
        <Button to={to}>CONTINUE</Button>
      </Container>
    </PageWrapper>
  )
}

export default InfoPage
