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

const Study = ({ updateProgress, updateStudy }) => {
  const [study, setStudy] = useState('')

  updateProgress(2 / 6)

  return (
    <>
      <Container>
        <Heading>What is your field of study?</Heading>
        <Input placeholder="Your Field of Study" update={setStudy} />
      </Container>
      <LittleDude />
      {study && (
        <Button onClick={() => updateStudy(study)} to="/industry">
          CONTINUE
        </Button>
      )}
    </>
  )
}

export default Study
