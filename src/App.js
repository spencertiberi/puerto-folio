import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Activities from './containers/Activities'
import Home from './containers/Home'
import Onboarding from './containers/Onboarding'
import Portfolio from './containers/Portfolio'
import copy from './copy'

const App = () => {
  const stateSchema = {
    name: '',
    study: '',
    field: {
      title: '',
      icon: '',
    },
    roles: [],
    skills: [],
  }
  const [name, setName] = useState(stateSchema.name)
  const [study, setStudy] = useState(stateSchema.study)
  const [field, setField] = useState(stateSchema.field)
  const [roles, setRoles] = useState(stateSchema.roles)
  const [skills, setSkills] = useState(stateSchema.skills)

  const state = {
    name,
    study,
    field,
    roles,
    skills,
  }

  const updateState = {
    name: setName,
    study: setStudy,
    field: setField,
    roles: setRoles,
    skills: setSkills,
  }

  const ActivitiesWithProps = () => <Activities state={state} />

  const OnboardingWithProps = () => (
    <Onboarding state={state} updateState={updateState} />
  )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Helmet>
            <title>{copy.title}</title>
          </Helmet>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/activities" component={ActivitiesWithProps} />
            <Route path="/onboarding" component={OnboardingWithProps} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
