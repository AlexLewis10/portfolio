import React, { Component } from 'react'
import missionCtrl from '../img/mission-ctrl.png'
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
          <div className="dark-box">
            <p className='title'>Mission-Ctrl</p>
            <img className='project-image' src={missionCtrl} alt='Mission Control'></img>
          </div>
          <div className="light-box">
            <p className='title'>Bank Challenge</p>
          </div>
          <div className="light-box">
            <p className='title'>React Thermostat</p></div>
          <div className="dark-box">
            <p className='title'>Acebook</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
