import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
  render () {
    return (
      <div>
        <h2>Projects</h2>
        <Link id='home' to='/'>Home</Link>
      </div>
    )
  }
}

export default Projects
