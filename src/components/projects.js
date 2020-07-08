import React, { Component } from 'react'
import missionCtrl from '../img/mission-ctrl.png'
import bank from '../img/bank.png'
import thermostat from '../img/thermostat.png'
import acebook from '../img/acebook.png'
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
            <img className='project-image' src={bank} alt='Bank challenge'></img>
          </div>
          <div className="light-box">
            <p className='title'>React Thermostat</p>
            <img className='project-image' src={thermostat} alt='Thermostat'></img>
          </div>

          <div className="dark-box">
            <p className='title'>Acebook</p>
            <img className='project-image' src={acebook} alt='Acebook'></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
