import React from 'react'
import './calc-buttons.css'

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
}

const Button = props => <div className={`button-wrapper ${
  isOperator(props.children) ? null : 'operator'
}`}>{props.children}</div>

export default Button