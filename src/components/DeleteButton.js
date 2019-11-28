import React, { Component } from 'react'


import './DeleteButton.css'

export default class DeleteButton extends Component {
  render() {
    return (
    <div className="btn_btn"
    onClick={()=>this.props.handleClear()}>
    {this.props.children}
    </div>
    )
  }
}