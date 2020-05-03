import React from 'react'
import Button from '../../../../components/LinkButton'
import { Image, Text, HigherButton } from './styles'
import PageWrapper from '../../../../components/PageWrapper'

const CompletePage = ({ image, text }) => (
  <PageWrapper dark>
    <Image src={image} />
    <HigherButton to="/portfolio">CREATE PORTFOLIO</HigherButton>
    <Text>{text}</Text>
    <Button light to="/">
      TRY ANOTHER ACTIVITY
    </Button>
  </PageWrapper>
)

export default CompletePage
