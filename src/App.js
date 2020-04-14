import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './containers/Home'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  </Router>
)

export default App
