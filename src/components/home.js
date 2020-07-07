import React, { Component } from 'react'
import profile from '../img/profile.png'
import Nav from './nav'


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
          <div id="mid_div">
            <img src={profile} alt="Alex Lewis"></img>
            <h2>Hi, I&#39;m Alex Lewis</h2>
            <p>I&#39;m a junior software developer<br/>
            looking for my first job in the industry.<br/>
            Feel free to take a look at my CV and my projects on Github</p>
          </div>
          <Nav />
        </div>
      )
  }
}

export default Home
