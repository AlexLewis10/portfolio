import React, { Component } from 'react'
import Axios from 'axios'

export class Cards extends Component {
  constructor (props) {
    super(props)
    this.getCards = this.getCards.bind(this)
    this.drawCard = this.drawCard.bind(this)
    this.state = {
      deckID: null
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
        console.log(response.data.success)
      })
      .catch(error => {
        return error
      })
  }

  render () {
    if (this.state.deckID) {
      return (
        <button onClick={this.drawCard}>Draw</button>
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
