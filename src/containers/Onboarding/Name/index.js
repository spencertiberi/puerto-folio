import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/LinkButton'
import Heading from '../components/Heading'
import LittleDude from '../components/LittleDude'
import Input from '../../../components/Form'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Name = ({ updateProgress, updateName }) => {
  const [name, setName] = useState('')
  updateProgress(1 / 6)
  return (
    <>
      <Container>
        <Heading>What is your name?</Heading>
        <Input placeholder="Your Name" update={setName} />
      </Container>
      <LittleDude />
      {name && (
        <Button onClick={() => updateName(name)} to="/study">
          CONTINUE
        </Button>
      )}
    </>
  )
}

export default Name
