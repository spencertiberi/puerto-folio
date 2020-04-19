import React from 'react'
import PageContainer from '../../components/PageContainer'
import PageWrapper from '../../components/PageWrapper'
import Button from '../../components/LinkButton'
import { Image, TextContainer, Title, SubTitle } from './styles'
import copy from '../../copy'
import SplashImage from './paintbrush.png'

const Home = () => (
  <PageWrapper>
    <PageContainer>
      <Image src={SplashImage} />
      <TextContainer>
        <Title>{copy.title}</Title>
        <SubTitle>{copy.catchPhrase}</SubTitle>
        <Button to="/name" width="70vw">
          Get Started!
        </Button>
      </TextContainer>
    </PageContainer>
  </PageWrapper>
)

export default Home
