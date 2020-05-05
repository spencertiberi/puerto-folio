import React from 'react'
import Heading from '../components/heading'
import TopSection from './components/TopSection'
import MiddleSection from './components/MiddleSection'
import Contact from './components/Contact'
import nutrition from '../assets/nutrition.png'
import Bottom from './components/Bottom'
import { Image } from './styles'

const user = {
  name: 'Gabe',
  major: 'Defense Agaisnt the Dark Arts',
  opportunity: {
    image: nutrition,
    title: 'Nutrition Journalist',
  },
  email: 'brianrosenheck@jordan.edu',
  phone: 'XXX-XXX-XXXX',
}

const Overview = () => (
  <>
    <Heading>{`Hi, I’m ${user.name}.`}</Heading>
    <TopSection />
    <Heading>{`A recent graduate in ${user.major.toUpperCase()}`}</Heading>
    <MiddleSection />
    <Heading>{`Looking for opportunities as a ${user.opportunity.title.toUpperCase()}`}</Heading>
    <Image src={user.opportunity.image} />
    <Heading>Reach me at...</Heading>
    <Contact email={user.email} phone={user.phone} />
    <Bottom />
  </>
)

export default Overview
