import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper'
import Overview from './Overview'

const Portfolio = () => (
  <Router>
    <PageWrapper>
      <Switch>
        <Route path="/" component={Overview} />
      </Switch>
    </PageWrapper>
  </Router>
)

export default Portfolio
