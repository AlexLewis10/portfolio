import React, { Component } from 'react'
import profilepic from '../img/profilepic.jpg'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      displayCv: false
    }
  }

  showCv = () => {
    this.setState({ displayCv: true })
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
        </div>
      )
    }
    if (this.state.displayCv) {
      return (
        <div><h3>CV</h3></div>
      )
    }
  }
}

export default App
