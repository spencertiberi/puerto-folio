import React from 'react'
import PageContainer from '../../components/PageContainer'
import PageWrapper from '../../components/PageWrapper'
import Button from '../../components/LinkButton'
import { Bottom, Image, TextContainer, Title, SubTitle } from './styles'
import copy from '../../copy'
import bottom from './assets/Intersect.svg'
import penguin from './assets/penguin.png'

const Home = () => (
  <PageWrapper>
    <PageContainer>
      <TextContainer>
        <Title>{copy.title}</Title>
        <SubTitle>{copy.catchPhrase}</SubTitle>
      </TextContainer>
      <Image src={penguin} />
      <Button to="/name" width="70vw">
        GET STARTED
      </Button>
    </PageContainer>
    <Bottom src={bottom} alt="Bottom of page" />
  </PageWrapper>
)

export default Home
