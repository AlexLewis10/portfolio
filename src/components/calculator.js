import React, { Component } from 'react'
import Button from '../modules/button.jsx'
import './calculator.css'



export class Calculator extends Component {



  render() {
    return (
      <div className='row'>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
      </div>
    )
  }
}

export default Calculator
