import React, { Component } from 'react'
import Axios from 'axios'


export class Cards extends Component {
  constructor() {
    super()
    this.state = {
      deckID: ''
    }
  }

  getCards = () => {
    Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        console.log(response.data.deck_id)
      })
      .catch(error => {
        return error
      })
  }

  render() {
    return (
      <div>
        <h3>Cards</h3>
        <p>{this.getCards()}</p>
      </div>
    )
  }
}

export default Cards
