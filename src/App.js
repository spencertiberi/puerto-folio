import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './containers/Home'
import Review from './containers/Review'
import Name from './containers/Onboarding/Name'
import Study from './containers/Onboarding/Study'
import copy from './copy'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet>
          <title>{copy.title}</title>
        </Helmet>
        <Switch>
          <Route path="/review" component={Review} />
          <Route path="/study" component={Study} />
          <Route path="/name" component={Name} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  </Router>
)

export default App
