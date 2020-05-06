import React from 'react'
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
    name: 'Gabe',
    study: 'Defense Against the Dark Arts',
    field: {
      title: '',
      icon: '',
    },
    roles: ['Nutrition Journalist'],
    skills: [copy.skills[8], copy.skills[0], copy.skills[12]],
  }

  // Credit to https://joshwcomeau.com/react/persisting-react-state-in-localstorage/
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key)
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
  }

  const [name, setName] = useStickyState(stateSchema.name, 'name')
  const [study, setStudy] = useStickyState(stateSchema.study, 'study')
  const [field, setField] = useStickyState(stateSchema.field, 'field')
  const [roles, setRoles] = useStickyState(stateSchema.roles, 'roles')
  const [skills, setSkills] = useStickyState(stateSchema.skills, 'skills')

  const PortfolioWithProps = () => (
    <Portfolio
      name={name}
      study={study}
      field={field}
      roles={roles}
      skills={skills}
    />
  )

  const ActivitiesWithProps = () => (
    <Activities
      name={name}
      study={study}
      field={field}
      roles={roles}
      skills={skills}
    />
  )

  const OnboardingWithProps = () => (
    <Onboarding
      setName={setName}
      setStudy={setStudy}
      setField={setField}
      setRoles={setRoles}
      setSkills={setSkills}
      name={name}
      study={study}
      field={field}
      roles={roles}
      skills={skills}
    />
  )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Helmet>
            <title>{copy.title}</title>
          </Helmet>
          <Switch>
            <Route path="/portfolio" component={PortfolioWithProps} />
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
