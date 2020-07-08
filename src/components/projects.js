import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
  render () {
    return (
      <div>
        <div id="header-grid">
          <Link id='home' to='/'>Home</Link>
          <h2>Projects</h2>
        </div>
        <div id='project-grid'>
          <div className="dark-box"><p>Mission-Ctrl</p></div>
          <div className="light-box"><p>Bank Challenge</p></div>
          <div className="light-box"><p>React Thermostat</p></div>
          <div className="dark-box"><p>Acebook</p></div>
        </div>
      </div>
    )
  }
}

export default Projects
