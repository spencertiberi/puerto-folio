import React from 'react'
import Heading from '../components/heading'
import TopSection from './components/TopSection'
import MiddleSection from './components/MiddleSection'
import Contact from './components/Contact'
import nutrition from '../assets/nutrition.png'
import Bottom from './components/Bottom'
import purpose from '../assets/purpose.png'
import creativity from '../assets/creative.png'
import critical from '../assets/critical.png'
import { Image } from './styles'

const user = {
  name: 'Gabe',
  major: 'Defense Agaisnt the Dark Arts',
  opportunity: {
    title: 'Nutrition Journalist',
    image: nutrition,
  },
  email: 'brianrosenheck@jordan.edu',
  phone: 'XXX-XXX-XXXX',
  skills: [
    {
      title: 'Innovation, Creativity, & Entrepreneurial Spirit',
      image: creativity,
    },
    { title: 'Analytical & Critical Thinking', image: critical },
    { title: 'Purpose-Driven', image: purpose },
  ],
}

const Overview = () => (
  <>
    <Heading>{`Hi, I’m ${user.name}.`}</Heading>
    <TopSection skills={user.skills} />
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
