import React, { useState } from 'react'
import _ from 'lodash'
import Button from '../../../components/LinkButton'
import Heading from '../components/Heading'
import Selection from './components/Selection'
import { Choices } from './styles'
import copy from '../../../copy'

const Skills = ({ updateProgress }) => {
  const [skills, setSkills] = useState([])

  updateProgress(5 / 6)

  const updateSkills = (selection) => {
    if (skills.length >= 3) {
      _.pull(skills, selection)
    } else {
      setSkills((prevSkills) => [...prevSkills, selection])
    }
  }

  const checkChosen = (item) => {
    return skills.includes(item)
  }

  const selections = copy.skills.map((choice) => (
    <Selection
      title={choice.title}
      icon={choice.image}
      key={choice.title}
      updateChoice={() => updateSkills(choice.title)}
      choosen={checkChosen(choice.title)}
      greyedOut={skills.length >= 3 && !skills.includes(choice.title)}
    />
  ))

  return (
    <>
      <Heading>What are your top skills?</Heading>
      <Choices>{selections}</Choices>
      {skills.length === 3 && <Button to="/fin">Continue</Button>}
    </>
  )
}

export default Skills
