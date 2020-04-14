import React from 'react'
import Button from '../../components/Button'
import { Input, Label } from '../../components/Form'
import PageWrapper from '../../components/PageWrapper'

const Home = () => (
  <PageWrapper>
    Welcome to Puerto Folio!
    <Label>Name</Label>
    <Input placeholder="Enter Name" />
    <Button>Submit</Button>
  </PageWrapper>
)

export default Home
