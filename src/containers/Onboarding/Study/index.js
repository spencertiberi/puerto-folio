import React, { useState } from 'react'
import Button from '../../../components/LinkButton'
import PageContainer from '../../../components/PageContainer'
import PageWrapper from '../../../components/PageWrapper'
import Selection from './components/Selection'
import { Choices } from './styles'
import copy from '../../../copy'

const Study = () => {
  const [study, setStudy] = useState('')

  return (
    <PageWrapper>
      <PageContainer>
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
      </PageContainer>
    </PageWrapper>
  )
}

export default Study
