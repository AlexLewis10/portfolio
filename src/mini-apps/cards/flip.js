import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import front from '../../img/thermostat.png'
import back from '../../img/bank.png'

export class Flip extends Component {
  constructor () {
    super()
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  render () {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
        <div>
          <img src={front} alt='card' onClick={this.handleClick}></img>
        </div>

        <div>
          <img src={back} alt='card' onClick={this.handleClick}></img>
        </div>
      </ReactCardFlip>
    )
  }
}

export default Flip
