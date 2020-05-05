import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Circle = styled(Flex)`
  position: absolute;
  width: 470px;
  height: 470px;
  border-radius: 470px;
  background-color: ${(props) =>
    props.theme.colors.portfolio[props.color].regular};
  align-items: center;
  justify-content: flex-start;
  top: 57px;
  right: -260px;
  padding: 25px;
  z-index: -50;
  overflow: hidden;
`

const Icon = styled.img`
  width: 130px;
  height: 130px;
`

const BigCircle = ({ color, icon }) => (
  <Circle color={color}>
    <Icon src={icon} />
  </Circle>
)

export default BigCircle
