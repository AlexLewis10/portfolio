import React, { Component } from 'react'
import Cv from './cv'
import profilepic from '../img/profilepic.jpg'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      displayCv: false
    }
  }

  showCv = () => {
    if (this.state.displayCv) {
      this.setState({ displayCv: false })
    }
    if (this.state.displayCv === false) {
      this.setState({ displayCv: true })
    }
    
  }

  render () {
    if (this.state.displayCv === false) {
      return (
        <div>
          <div id="mid_div">
            <img src={profilepic} alt="Alex Lewis"></img>
            <h2>Hi, I&#39;m Alex Lewis</h2>
          </div>
          <div>
            <button id='cv' className='btn' onClick={this.showCv}>CV</button>
          </div>
          <div className='links'>
            <a href='https://github.com/AlexLewis10/CV'>Github</a>
            <a href='https://www.linkedin.com/in/alex-lewis-022761a8/'>LinkedIn</a>
            <a href='https://medium.com/@alexlewis374'>Medium</a>
            <a href='https://www.codewars.com/users/ALJALE'>CodeWars</a>
          </div>
        </div>
      )
    }
    if (this.state.displayCv) {
      return (
        <div>
          <Cv /> 
          <button id='home' className='btn' onClick={this.showCv}>Home</button>
        </div>
        
      )
    }
  }
}

export default App
