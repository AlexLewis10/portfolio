import React, { Component } from 'react'
import Axios from 'axios'
import backOfCard from '../../img/backofcard.png'
import SetOne from './SetOne'

export class Cards extends Component {
  constructor (props) {
    super(props)
    this.getCards = this.getCards.bind(this)
    this.drawCard = this.drawCard.bind(this)
    // this.handleCardFlip = this.handleCardFlip.bind(this)
    this.state = {
      deckID: null,
      cardOne: null,
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

  render () {
    const setOne = (
      <SetOne
      backOfCard={this.state.backOfCard}
      handleCardFlip={this.handleCardFlip}
      cardOne={this.state.cardOne}
    />
    )
    if (this.state.deckID) {
      return (
        <div>
          <button onClick={this.drawCard}>Draw</button>
          {setOne}
          {setOne}
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
