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
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>SASS, css</li>
              <li>Travis</li>
              <li>Surge</li>
            </ul>
            <a className='deployed-links' href='http://mission-ctrl.surge.sh/'>Take a look!</a>
            <a className='project-links' href='https://github.com/AlexLewis10/mission-ctrl'>Github</a>
          </div>

          <div className="dark-box">
            <p className='title'>Bank Challenge</p>
            <img className='project-image' src={bank} alt='Bank challenge'></img>
            <ul>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>Jest</li>
              <li>ESlint</li>
            </ul>
            <a className='project-links' href='https://github.com/AlexLewis10/bank-tech-test2'>Github</a>
          </div>

          <div className="dark-box">
            <p className='title'>React Thermostat</p>
            <img className='project-image' src={thermostat} alt='Thermostat'></img>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Surge</li>
            </ul>
            <a className='deployed-links' href='http://thermo-react.surge.sh/'>Take a look!</a>
            <a className='project-links' href='https://github.com/AlexLewis10/react-thermostat'>Github</a>
          </div>

          <div className="dark-box">
            <p className='title'>Acebook</p>
            <img className='project-image' src={acebook} alt='Acebook'></img>
            <ul>
              <li>Rails</li>
              <li>Ruby</li>
              <li>PostgreSQL</li>
              <li>RSpec</li>
              <li>Capybara</li>
              <li>Travis</li>
              <li>Heroku</li>
            </ul>
            <a className='deployed-links' href='https://gapag1.herokuapp.com/'>Take a look!</a>
            <a className='project-links' href='https://github.com/AlexLewis10/acebook-rails-template'>Github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
