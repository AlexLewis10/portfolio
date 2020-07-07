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

  // sendToProjects = () => {
  //   this.setState({ showProjects: true })
  // }

  // sentToHome = () => {
  //   this.setState({ showProjects: false })
  // }

  render () {
    // if (this.state.showProjects === false) {
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
    // }
    // if (this.state.showProjects === true) {
    //   return (
    //     <div>
    //       <Projects />
    //       <div className='home'>
    //         <button id="home" className="btn" onClick={this.sentToHome}>Home</button>
    //       </div>
    //     </div>
    //   )
    // }
      }
}

export default Home
