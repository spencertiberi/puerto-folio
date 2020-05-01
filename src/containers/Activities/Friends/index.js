import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './Landing'
import Info from './Info'
import Share from './Share'

const Friends = () => (
  <Router basename="activities/friends">
    <Switch>
      {/* <Route path="/photo" component={Photo} /> */}
      <Route path="/info" component={Info} />
      <Route path="/share" component={Share} />
      <Route path="/" component={Landing} />
    </Switch>
  </Router>
)

export default Friends
