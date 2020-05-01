import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './Landing'
import Friends from './Friends'

const Activities = () => {
  return (
    <Router basename="/activities">
      <Switch>
        {/* <Route path="/photo" component={Photo} /> */}
        <Route path="/friends" component={Friends} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  )
}

export default Activities
