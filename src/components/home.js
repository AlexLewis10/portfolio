import React, { Component } from 'react'
import Projects from './projects'
import profile from '../img/profile.png'

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      showProjects: false
    }
  }

  sendToProjects = () => {
    this.setState({ showProjects: true })
  }

  sentToHome = () => {
    this.setState({ showProjects: false })
  }

  render () {
    if (this.state.showProjects === false) {
      return (
        <div>
          <div id="mid_div">
            <img src={profile} alt="Alex Lewis"></img>
            <h2>Hi, I&#39;m Alex Lewis</h2>
            <p>I&#39;m a junior software developer<br/>
            looking for my first job in the industry.<br/>
            Feel free to take a look at my CV and my projects on Github</p>
          </div>
          <div className='links'>
            <a href='https://github.com/AlexLewis10/CV/raw/master/AlexLewisCV.pdf' download>CV</a>
            <a href='https://github.com/AlexLewis10/CV'>Github</a>
            <a href='https://www.linkedin.com/in/alex-lewis-022761a8/'>LinkedIn</a>
            <a href='https://medium.com/@alexlewis374'>Medium</a>
            <a href='https://www.codewars.com/users/ALJALE'>CodeWars</a>
            <button id="projects" className="btn" onClick={this.sendToProjects}>Projects</button>
          </div>
        </div>
      )
    }
    if (this.state.showProjects === true) {
      return (
        <div>
          <Projects />
          <div>
          <button id="home" className="btn" onClick={this.sentToHome}>Home</button>
          </div>
        </div>
      )
    }
  }
}

export default Home
