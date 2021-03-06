import React, { Component } from 'react'
import profile from '../img/profile.png'
import Nav from './nav'
import Calculator from '../mini-apps/calculator/components/calculator'
import Cards from '../mini-apps/cards/cards'
import { Link } from 'react-scroll'

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      showProjects: false
    }
  }

  render () {
    return (
      <div>

        <div id='start-div'>
          <div id="mid_div">
            <img src={profile} alt="Alex Lewis"></img>
            <h2>Hi, I&#39;m Alex Lewis</h2>
            <p>I&#39;m a junior software developer
            looking for my first job in the industry.<br/>
            Feel free to take a look at my CV and my projects on Github</p>
          </div>
          <Nav />
          <div className='smooth-scroll'>
            <Link id='nav-arrow' to="mini-apps" smooth={true} duration={1000}><i className="arrow down"></i></Link>
          </div>
        </div>
        <div id='mini-apps'>
          <div className='header-grid'>
            <h2 id='grid-header'>Mini Apps</h2>
          </div>
          <Calculator />
          <Cards />
        </div>
      </div>
    )
  }
}

export default Home
