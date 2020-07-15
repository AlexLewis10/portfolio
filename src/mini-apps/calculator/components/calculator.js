import React, { Component } from 'react'
import Button from './calc-buttons.jsx'
import Input from './input.jsx'
import ClearButton from './clear-button.jsx'
import { evaluate } from 'mathjs'
import '../styles/calculator.css'



export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val})
  }

  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input)})
  }

  render() {
    return (
      <div className='calc-wrap'>
        <Input input={this.state.input}></Input>
        <div className='row'>
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <ClearButton handleClear={() => this.setState({ input: ''})}>Clear</ClearButton>
      </div>
    )
  }
}

export default Calculator
