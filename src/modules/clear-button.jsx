import React from 'react'
import './clear-button.css'

const ClearButton = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
)

export default ClearButton