import React from 'react'
import Button from '../../../../components/LinkButton'
import { Container, Text } from './styles'
import PageWrapper from '../../../../components/PageWrapper'

const InfoPage = ({ text, to }) => {
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
