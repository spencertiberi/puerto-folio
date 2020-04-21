import React, { useState } from 'react'
import Button from '../../../components/LinkButton'
import PageWrapper from '../../../components/PageWrapper'
import Input from '../../../components/Form'

const Name = () => {
  const [name, setName] = useState('')

  return (
    <PageWrapper>
      <Input
        placeholder="LeBron James"
        label="What is your name?"
        update={setName}
      />
      {name && <Button to="/study">Continue</Button>}
    </PageWrapper>
  )
}

export default Name
