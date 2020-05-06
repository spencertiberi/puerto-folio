import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import back from '../../assets/back.png'

const Button = styled.img`
  width: 36px;
  height: 36px;
`

const Container = styled(Link)`
  position: absolute;
  width: auto;
  width: auto;
  top: 30px;
  left: 30px;
  z-index: 150;
`

const BackButton = ({ to }) => (
  <Container to={to}>
    <Button src={back} />
  </Container>
)

export default BackButton
