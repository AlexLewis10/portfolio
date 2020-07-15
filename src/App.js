import React from 'react'
import { BrowserRouter as Router, 
        Switch, 
        Route } from 'react-router-dom'
import Home from './components/home'
import Projects from './components/projects'
import MiniApps from './components/mini-apps'

function App () {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" exact component={Projects}/> 
        <Route path="/mini-apps" exact component={MiniApps}/>
      </Switch>
      </div>

    </Router>
  )
}

export default App
