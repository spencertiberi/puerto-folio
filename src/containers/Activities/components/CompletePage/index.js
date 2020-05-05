import React from 'react'
import Button from '../../../../components/LinkButton'
import { Image, Text } from './styles'
import PageWrapper from '../../../../components/PageWrapper'

const CompletePage = ({ image, text }) => (
  <PageWrapper dark>
    <Image src={image} />
    <Button as="a" href="/portfolio" style={{ bottom: '110px' }}>
      CREATE PORTFOLIO
    </Button>
    <Text>{text}</Text>
    <Button light to="/">
      TRY ANOTHER ACTIVITY
    </Button>
  </PageWrapper>
)

export default CompletePage
