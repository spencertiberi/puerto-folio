import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { Input, Label } from '../../components/Form'
import PageWrapper from '../../components/PageWrapper'
import copy from '../../copy'

const Home = () => (
  <fragment>
    <Header />
    <PageWrapper>
      {`Welcome to ${copy.title}!`}
      <Label>Name</Label>
      <Input placeholder="Enter Name" />
      <Button>Submit</Button>
    </PageWrapper>
  </fragment>
)

export default Home
