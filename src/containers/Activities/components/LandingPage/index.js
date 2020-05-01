import React from 'react'
import Button from '../../../../components/LinkButton'
import { Image, SubTitle, Title } from './styles'
import PageWrapper from '../../../../components/PageWrapper'

const LandingPage = ({ image, subTitle, title, to }) => (
  <PageWrapper>
    <Image src={image} />
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    <Button to={to}>START</Button>
  </PageWrapper>
)

export default LandingPage
