import React from 'react'
import { Circle, Icon } from './styles'

const Domain = ({ icon, color }) => (
  <Circle color={color}>
    <Icon src={icon} />
  </Circle>
)

export default Domain
