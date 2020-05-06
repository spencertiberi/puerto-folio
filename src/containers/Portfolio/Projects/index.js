import React from 'react'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import Domain from './components/Domain'
import ProjectCard from './components/ProjectCard'
import BackButton from '../components/BackButton'
import copy from '../../../copy'
import { Title, ProjectContainer } from './styles'

const Projects = () => {
  const { color, skill, domain } = useParams()
  const index = _.findIndex(copy.skills, (o) => o.title === skill)
  const icon = copy.skills[index].image
  return (
    <>
      <BackButton to={`/portfolio/${color}/${skill}`} />
      <Title>{domain.toUpperCase()}</Title>
      <Domain icon={icon} color={color} />
      <ProjectContainer>
        <ProjectCard title="Project #1" to="/cardexample.pdf" />
        <ProjectCard title="Project #2" />
        <ProjectCard title="Event" />
        <ProjectCard title="Awards" />
      </ProjectContainer>
    </>
  )
}

export default Projects
