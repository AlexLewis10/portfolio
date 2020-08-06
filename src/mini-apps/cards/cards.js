import React, { Component } from 'react'
import Axios from 'axios'
import backOfCard from '../../img/backofcard.png'
import SetOneCards from './SetOneCards'
import SetTwo from './SetTwo'


export class Cards extends Component {
  constructor (props) {
    super(props)
    this.getCards = this.getCards.bind(this)
    this.drawCard = this.drawCard.bind(this)
    this.savePickedCard = this.savePickedCard.bind(this)
    this.doesCardMatch = this.doesCardMatch.bind(this)
    this.state = {
      deckID: null,
      cardOne: null,
      backOfCard: null,
      pickOne: null,
      score: 0
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
    Axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`)
      .then(response => {
        this.setState({
          cardOne: response.data.cards[0].image,
          cardTwo: response.data.cards[1].image,
          backOfCard: backOfCard
        })
      })
      .catch(error => {
        return error
      })
  }

  savePickedCard (pickedCard) {
    this.setState({ pickOne: pickedCard })
  }

  doesCardMatch (pickTwo) {
      if (this.state.pickOne === pickTwo) {
        this.setState((prevState) => ({ score: prevState.score += 1 }))
    }
    this.resetPickOne()
  }

  resetPickOne () {
    this.setState({ pickOne: null })
  }

  render () {
    const setOne = [
      <SetOneCards
        backOfCard={this.state.backOfCard}
        handleCardFlip={this.handleCardFlip}
        cardOne={this.state.cardOne}
        savePickedCard={this.savePickedCard}
      />,
      <SetOneCards
        backOfCard={this.state.backOfCard}
        handleCardFlip={this.handleCardFlip}
        cardOne={this.state.cardTwo}
        savePickedCard={this.savePickedCard}
      />
    ]
    const cards = setOne.map((card) => 
      <p>{card}</p>
    )

   
    if (this.state.deckID) {
      return (
        <div>
          <button onClick={this.drawCard}>Draw</button>
          {cards}
          <SetTwo
            backOfCard={this.state.backOfCard}
            handleCardFlip={this.handleCardFlip}
            cardOne={this.state.cardOne}
            doesCardMatch={this.doesCardMatch}
          />
          <p>Score: {this.state.score}</p>
        </div>
      )
    }
    return (
      <div>
        <h3>Cards - In progress</h3>
        <button onClick={this.getCards}>New Game</button>
      </div>
    )
  }
}

export default Cards
