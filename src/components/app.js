import React, { Component } from 'react'
import profilepic from '../img/profilepic.jpg'

export class App extends Component {
  render () {
    return (
      <div>
        <img src={profilepic} alt="Alex Lewis"></img>
        <h2>Hi, I&#39;m Alex Lewis</h2>
      </div>
    )
  }
}

export default App
