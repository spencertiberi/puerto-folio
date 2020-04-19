import React, { useState } from 'react'
import Button from '../../../components/LinkButton'
import PageContainer from '../../../components/PageContainer'
import PageWrapper from '../../../components/PageWrapper'
import Input from '../../../components/Form'

const Name = () => {
  const [name, setName] = useState('')

  return (
    <PageWrapper>
      <PageContainer>
        <Input
          placeholder="LeBron James"
          label="What is your name?"
          update={setName}
        />
        {name && <Button to="/study">Continue</Button>}
      </PageContainer>
    </PageWrapper>
  )
}

export default Name
