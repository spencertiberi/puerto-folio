import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper'
import Overview from './Overview'
import Breakdown from './Breakdown'
import Projects from './Projects'

const Portfolio = ({ name, study, roles, skills }) => {
  const OverviewWithProps = () => (
    <Overview name={name} study={study} roles={roles} skills={skills} />
  )

  return (
    <PageWrapper>
      <Switch>
        <Route path="/portfolio/:color/:skill/:domain" component={Projects} />
        <Route path="/portfolio/:color/:skill" component={Breakdown} />
        <Route path="/portfolio" component={OverviewWithProps} />
      </Switch>
    </PageWrapper>
  )
}

export default withRouter(Portfolio)
