import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './Landing'
import Info from './Info'
import Share from './Share'
import FriendJoin from './FriendJoin'
import Questions from './Questions'
import Hashtags from './Hashtags'
import Fin from './Fin'

const Friends = ({ name }) => {
  const QuestionsWithProps = () => <Questions name={name} />
  return (
    <Router basename="activities/friends">
      <Switch>
        <Route path="/fin" component={Fin} />
        <Route path="/hashtags" component={Hashtags} />
        <Route path="/questions" component={QuestionsWithProps} />
        <Route path="/friendjoin" component={FriendJoin} />
        <Route path="/info" component={Info} />
        <Route path="/share" component={Share} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  )
}

export default Friends
