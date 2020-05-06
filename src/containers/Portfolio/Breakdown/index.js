import React from 'react'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import copy from '../../../copy'
import BigCircle from './components/BigCircle'
import Domain from './components/Domain'
import academic from '../assets/academic.png'
import professional from '../assets/professional.png'
import personal from '../assets/personal.png'
import { Domains } from './styles'

const Breakdown = () => {
  const { color, skill } = useParams()
  const index = _.findIndex(copy.skills, (o) => o.title === skill)
  const icon = copy.skills[index].image

  return (
    <>
      <Domains>
        <Domain
          title="ACADEMIC"
          icon={academic}
          color={color}
          offset="45vw"
          to={`${skill}/academic`}
        />
        <Domain
          title="PROFESSIONAL"
          icon={professional}
          color={color}
          offset="62vw"
          to={`${skill}/professional`}
        />
        <Domain
          title="PERSONAL"
          icon={personal}
          color={color}
          offset="45vw"
          to={`${skill}/personal`}
        />
        <BigCircle color={color} icon={icon} />
      </Domains>
    </>
  )
}

export default Breakdown
