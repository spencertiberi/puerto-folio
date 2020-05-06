import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './Landing'
import Friends from './Friends'

const Activities = ({ name }) => {
  const FriendsWithProps = () => <Friends name={name} />

  return (
    <Router basename="/activities">
      <Switch>
        <Route path="/friends" component={FriendsWithProps} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  )
}

export default Activities
