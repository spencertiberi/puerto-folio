import React, { useState } from 'react'
import Button from '../../../components/LinkButton'
import PageWrapper from '../../../components/PageWrapper'
import Selection from './components/Selection'
import { Choices } from './styles'
import copy from '../../../copy'

const Study = () => {
  const [study, setStudy] = useState('')

  return (
    <PageWrapper>
      <Choices>
        {copy.studies.map((choice) => (
          <Selection
            title={choice}
            key={choice}
            updateChoice={() => {
              setStudy(choice)
            }}
            choosen={study === choice}
          />
        ))}
      </Choices>
      {study && <Button to="/skills">Continue</Button>}
    </PageWrapper>
  )
}

export default Study
