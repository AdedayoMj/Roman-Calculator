
import React, { Component } from 'react'


import './ClearSubmitButton.css'

export default class ClearButton extends Component {
  render() {
    return (
    <div className="clear-btn _hover"
    onClick={()=>this.props.handleClear()}>
    {this.props.children}
    </div>
    )
  }
}