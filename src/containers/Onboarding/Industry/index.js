import React, { useState } from 'react'
import Button from '../../../components/LinkButton'
import Heading from '../components/Heading'
import Selection from './components/Selection'
import Input from '../../../components/Form'
import { Choices, Container } from './styles'
import copy from '../../../copy'

const Industry = ({ updateProgress, updateIndustry }) => {
  const [industry, setIndustry] = useState('')
  const [other, setOther] = useState('')

  updateProgress(3 / 6)

  const compileIndustry = () =>
    industry.title === 'Other'
      ? updateIndustry({ title: other, icon: industry.image })
      : updateIndustry(industry)

  return (
    <>
      <Heading>
        Which professional field are you interested in pursuing?
      </Heading>
      {industry.title !== 'Other' ? (
        <Choices>
          {copy.studies.map((choice) => (
            <Selection
              title={choice.title}
              icon={choice.image}
              key={choice.title}
              updateChoice={() => {
                setIndustry(choice)
              }}
              choosen={industry === choice}
            />
          ))}
        </Choices>
      ) : (
        <Container>
          <Selection title={industry.title} icon={industry.image} choosen />
          <Input placeholder="Your field study" update={setOther} />
        </Container>
      )}
      {industry && (
        <Button onClick={() => compileIndustry} to="/roles">
          CONTINUE
        </Button>
      )}
    </>
  )
}

export default Industry
