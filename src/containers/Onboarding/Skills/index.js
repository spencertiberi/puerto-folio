import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import Button from '../../../components/LinkButton'
import Heading from '../components/Heading'
import Selection from './components/Selection'
import { Choices } from './styles'
import copy from '../../../copy'

const Skills = ({ updateProgress, updateSkills }) => {
  const [skills, setSkills] = useState([])
  useEffect(() => updateProgress(5 / 6))

  const checkChosen = (item) => {
    return skills.includes(item)
  }

  const checkLength = () => skills.length >= 3

  const updateLocalSkills = (selection) => {
    setSkills((prevSkills) => {
      if (prevSkills.length >= 3) {
        return _.pull(prevSkills, selection)
      }
      return [...prevSkills, selection]
    })
  }

  const selections = copy.skills.map((choice) => (
    <Selection
      title={choice.title}
      icon={choice.image}
      key={choice.id}
      updateChoice={() => updateLocalSkills(choice)}
      choosen={checkChosen(choice)}
      greyedOut={skills.length >= 3 && !checkChosen(choice)}
    />
  ))

  return (
    <>
      <Heading sub="Pick 3 strengths that you identify with the most.">
        What are your top skills?
      </Heading>
      <Choices>{selections}</Choices>
      {checkLength() && (
        <Button onClick={() => updateSkills(skills)} to="/fin">
          Continue
        </Button>
      )}
    </>
  )
}

export default Skills
