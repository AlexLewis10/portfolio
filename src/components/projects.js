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
          <div className="dark-box"><p>1</p></div>
          <div className="light-box"><p>2</p></div>
          <div className="light-box"><p>3</p></div>
          <div className="dark-box"><p>4</p></div>
        </div>
      </div>
    )
  }
}

export default Projects
