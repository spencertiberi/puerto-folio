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

const Overview = ({ name, study, roles, skills }) => {
  const user = {
    name: name || 'Gabe',
    major: study || 'Defense Agaisnt the Dark Arts',
    opportunity: {
      title: roles[0] || 'Nutrition Journalist',
      image: nutrition,
    },
    email: 'brianrosenheck@jordan.edu',
    phone: 'XXX-XXX-XXXX',
    skills,
  }

  return (
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
}

export default Overview
