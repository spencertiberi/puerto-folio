import React from 'react'
import Card from './Components/ActivityCard'
import Portfolio from './Components/PortfolioCard'
import PageWrapper from '../../../components/PageWrapper'
import copy from '../../../copy'
import { Container, Heading, Row } from './styles'
import createPortfolio from './createPortfolio.png'

const Landing = () => (
  <>
    <PageWrapper>
      <Container>
        <Heading>Recommended Activities</Heading>
        <Row>
          <Card
            title={copy.activities.photos.title}
            image={copy.activities.photos.icon}
            diameter="109px"
            to="/photos"
          />
          <Card
            title={copy.activities.friends.title}
            image={copy.activities.friends.icon}
            diameter="109px"
            to="/friends"
          />
        </Row>
        <Heading>Other</Heading>
        <Row>
          <Card
            title={copy.activities.traces.title}
            image={copy.activities.traces.icon}
            diameter="82px"
          />
          <Card
            title={copy.activities.work.title}
            image={copy.activities.work.icon}
            diameter="82px"
          />
          <Card
            title={copy.activities.burning.title}
            image={copy.activities.burning.icon}
            diameter="82px"
          />
        </Row>
        <Portfolio
          title="Create Portfolio"
          image={createPortfolio}
          diameter="42px"
          to="portfolio"
        />
      </Container>
    </PageWrapper>
  </>
)

export default Landing
