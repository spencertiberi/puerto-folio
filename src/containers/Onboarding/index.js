import React, { useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom'
import Fin from './Fin'
import Industry from './Industry'
import Name from './Name'
import Roles from './Roles'
import Skills from './Skills'
import Study from './Study'
import PageWrapper from '../../components/PageWrapper'
import ProgressBar from './components/ProgressBar'

const Onboarding = ({
  setName,
  setStudy,
  setField,
  setRoles,
  setSkills,
  field,
  skills,
}) => {
  const [progress, setProgress] = useState(0)

  const IndustryWithProps = () => (
    <Industry updateProgress={setProgress} updateIndustry={setField} />
  )

  const NameWithProps = () => (
    <Name updateProgress={setProgress} updateName={setName} />
  )

  const RolesWithProps = () => (
    <Roles
      updateProgress={setProgress}
      industry={field}
      updateRoles={setRoles}
    />
  )

  const SkillsWithProps = () => (
    <Skills
      updateProgress={setProgress}
      skills={skills}
      updateSkills={setSkills}
    />
  )

  const StudyWithProps = () => (
    <Study updateProgress={setProgress} updateStudy={setStudy} />
  )

  const FinWithProps = () => <Fin updateProgress={setProgress} />

  return (
    <PageWrapper>
      <ProgressBar percent={progress} />
      <Router basename="/onboarding">
        <Switch>
          <Route path="/industry" component={IndustryWithProps} />
          <Route path="/name" component={NameWithProps} />
          <Route path="/roles" component={RolesWithProps} />
          <Route path="/skills" component={SkillsWithProps} />
          <Route path="/study" component={StudyWithProps} />
          <Route path="/fin" component={FinWithProps} />
          <Redirect from="/" to="/name" />
        </Switch>
      </Router>
    </PageWrapper>
  )
}

export default Onboarding
