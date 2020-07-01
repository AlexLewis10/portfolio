import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/home'

function App () {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/index.html">
          <Home />
        </Route>
      </div>
    </Router>
  )
}

export default App
