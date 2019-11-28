
import React, { Component } from 'react'


import './ClearSubmitButton.css'

export default class SubmitButton extends Component {
  render() {
    return (
    <div className="submit-btn sub_hover" onClick={()=>this.props.handleClick(this.props.children)}>
        {this.props.children}
      
    </div>
    )
  }
}