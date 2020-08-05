import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

export class SetOne extends Component {
  constructor (props) {
    super(props)
    this.handleCardFlip = this.handleCardFlip.bind(this)
    this.state = {
      isFlipped: false
    }
  }

  handleCardFlip () {
    this.setState({ isFlipped: !this.state.isFlipped })
    this.props.savePickedCard(this.props.cardOne)
  }

  render () {
    const showBackOfCard = (
      <img
        src={this.props.backOfCard}
        alt='back of card'
        onClick={this.handleCardFlip}
        ></img>
    )
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal'>
          <div>
            {this.props.backOfCard ? showBackOfCard : null}
          </div>

          <div>
            <img src={this.props.cardOne} alt='drawn card' onClick={this.handleCardFlip}></img>
          </div>
        </ReactCardFlip>
      </div>
    )
  }
}

export default SetOne
