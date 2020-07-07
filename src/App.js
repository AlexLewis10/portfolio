import React from 'react'
import { BrowserRouter as Router, 
        Switch, 
        Route } from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'

function App () {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" exact component={Projects}/> 
      </Switch>
      </div>

    </Router>
  )
}

export default App
