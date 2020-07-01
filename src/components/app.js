import React, { Component } from 'react'
import profile from '../img/profile.jpg'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      displayCv: false
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
        <div className='links'>
          <a href='https://github.com/AlexLewis10/CV/raw/master/AlexLewisCV.pdf' download>Download</a>
          <a href='https://github.com/AlexLewis10/CV'>Github</a>
          <a href='https://www.linkedin.com/in/alex-lewis-022761a8/'>LinkedIn</a>
          <a href='https://medium.com/@alexlewis374'>Medium</a>
          <a href='https://www.codewars.com/users/ALJALE'>CodeWars</a>
        </div>
      </div>
    )
  }
}

export default App
