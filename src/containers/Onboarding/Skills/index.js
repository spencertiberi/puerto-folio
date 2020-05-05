import React, { useState } from 'react'
import _ from 'lodash'
import Button from '../../../components/LinkButton'
import Heading from '../components/Heading'
import Selection from './components/Selection'
import { Choices } from './styles'
import copy from '../../../copy'

const Skills = ({ updateProgress, updateSkills }) => {
  const [skills, setSkills] = useState([])

  updateProgress(5 / 6)

  const updateLocalSkills = (selection) => {
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
      updateChoice={() => updateLocalSkills(choice)}
      choosen={checkChosen(choice)}
      greyedOut={skills.length >= 3 && !skills.includes(choice)}
    />
  ))

  return (
    <>
      <Heading sub="Pick 3 strengths that you identify with the most.">
        What are your top skills?
      </Heading>
      <Choices>{selections}</Choices>
      {skills.length === 3 && (
        <Button onClick={() => updateSkills(skills)} to="/fin">
          Continue
        </Button>
      )}
    </>
  )
}

export default Skills
