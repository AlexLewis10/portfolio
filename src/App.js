import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/projects" exact component={ Projects } />
      </Switch>
    </Router>
  )
}

export default App
