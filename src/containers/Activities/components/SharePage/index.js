import React from 'react'
import Button from '../../../../components/LinkButton'
import PageWrapper from '../../../../components/PageWrapper'
import { Container, Heading, LinkBox, SocialIcon, SocialMedia } from './styles'
import facebook from './assets/fb.png'
import text from './assets/txt.png'
import whatsapp from './assets/wa.png'

const SharePage = ({ to }) => {
  const link = 'https://digifolio.com/sharing/s6&wf'
  return (
    <PageWrapper dark>
      <Container>
        <Heading>Share this link with your friend!</Heading>
        <LinkBox>{link}</LinkBox>
        <SocialMedia>
          <SocialIcon src={facebook} />
          <SocialIcon src={whatsapp} />
          <SocialIcon src={text} />
        </SocialMedia>
      </Container>
      <Button to={to}>CONTINUE</Button>
    </PageWrapper>
  )
}

export default SharePage
