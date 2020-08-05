import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

export class SetOne extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false
    }
  }

  render () {
    console.log(props.backOfCard)
    const showBackOfCard = (
      <img
        src={backOfCard}
        alt='back of card'
        onClick={this.handleCardFlip}></img>
    )
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
          <div>
            {this.state.backOfCard ? showBackOfCard : null}
          </div>

          <div>
            <img src={this.state.cardOne} alt='drawn card' onClick={this.handleCardFlip}></img>
          </div>
        </ReactCardFlip>
      </div>
    )
  }
}

export default SetOne
