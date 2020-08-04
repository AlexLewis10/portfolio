import React, { Component } from 'react'
import Axios from 'axios'
import Flip from './flip'

export class Cards extends Component {
  constructor (props) {
    super(props)
    this.getCards = this.getCards.bind(this)
    this.drawCard = this.drawCard.bind(this)
    this.state = {
      deckID: null,
      cardOne: null,
      cardTwo: null
    }
  }

  getCards () {
    Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        console.log(response)
        this.setState({ deckID: response.data.deck_id })
      })
      .catch(error => {
        return error
      })
  }

  drawCard () {
    Axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`)
      .then(response => {
        this.setState({
          cardOne: response.data.cards[0].image,
          cardTwo: response.data.cards[0].image
        })
      })
      .catch(error => {
        return error
      })
  }

  render () {
    if (this.state.deckID) {
      return (
        <div>
          <button onClick={this.drawCard}>Draw</button>
          <img src={this.state.cardOne} alt='drawn card'></img>
          <img src={this.state.cardTwo} alt='second drawn card'></img>
        </div>
      )
    }
    return (
      <div>
        <h3>Cards</h3>
        <button onClick={this.getCards}>New Game</button>
        <Flip />
      </div>

    )
  }
}

export default Cards
