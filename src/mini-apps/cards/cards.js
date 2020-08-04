import React, { Component } from 'react'
import Axios from 'axios'
import ReactCardFlip from 'react-card-flip'
import backOfCard from '../../img/backofcard.png'

export class Cards extends Component {
  constructor (props) {
    super(props)
    this.getCards = this.getCards.bind(this)
    this.drawCard = this.drawCard.bind(this)
    this.handleCardFlip = this.handleCardFlip.bind(this)
    this.state = {
      deckID: null,
      cardOne: null,
      isFlipped: false,
      backOfCard: null
    }
  }

  getCards () {
    Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        this.setState({ deckID: response.data.deck_id })
      })
      .catch(error => {
        return error
      })
  }

  drawCard () {
    Axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`)
      .then(response => {
        this.setState({
          cardOne: response.data.cards[0].image,
          backOfCard: backOfCard
        })
      })
      .catch(error => {
        return error
      })
  }

  handleCardFlip (e) {
    e.preventDefault()
    this.setState({ isFlipped: !this.state.isFlipped })
  }

  render () {
    const showBackOfCard = (
      <img
        src={backOfCard}
        alt='back of card'
        onClick={this.handleCardFlip}></img>
    )
    if (this.state.deckID) {
      return (
        <div>
          <button onClick={this.drawCard}>Draw</button>
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
    return (
      <div>
        <h3>Cards</h3>
        <button onClick={this.getCards}>New Game</button>
      </div>

    )
  }
}

export default Cards
