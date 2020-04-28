import React, { useState } from 'react'
import _ from 'lodash'
import Button from '../../../components/LinkButton'
import Heading from '../components/Heading'
import Role from './components/Role'
import Selection from './components/Selection'
import Input from '../../../components/Form'
import HelpModal from '../../../components/HelpModal'
import { Container, RoleContainer, Label } from './styles'
import copy from '../../../copy'

const Roles = ({ updateProgress, industry, updateRoles }) => {
  const [currRole, setCurrRole] = useState('')
  const [roles, setRoles] = useState([])

  updateProgress(4 / 6)

  const handleEnter = (e) => {
    if (currRole && currRole.match(/^ *$/) === null && e.key === 'Enter') {
      setRoles((prevRoles) => [...prevRoles, currRole])
      setCurrRole('')
    }
  }

  return (
    <>
      <Container>
        <Heading>What is your role of interest?</Heading>
        <Label>Industry</Label>
        <Selection title="hobo" icon={copy.studies[1].image} choosen />
        <Label>
          Role(s)
          <HelpModal text={copy.helpText.roles} />
        </Label>
        <Input
          type="text"
          placeholder="Role(s) of interest"
          value={currRole}
          update={setCurrRole}
          onKeyPress={(e) => handleEnter(e)}
        />
      </Container>
      <RoleContainer>
        {roles.map((role) => (
          <Role roleTitle={role} roles={roles} updateRoles={setRoles} />
        ))}
      </RoleContainer>
      {roles.length !== 0 && (
        <Button onClick={() => updateRoles(roles)} to="/skills">
          CONTINUE
        </Button>
      )}
    </>
  )
}

export default Roles
