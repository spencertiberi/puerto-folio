import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper'
import Overview from './Overview'
import Breakdown from './Breakdown'

const Portfolio = () => (
  <PageWrapper>
    <Switch>
      <Route path="/portfolio/:color/:skill" component={Breakdown} />
      <Route path="/portfolio" component={Overview} />
    </Switch>
  </PageWrapper>
)

export default withRouter(Portfolio)
