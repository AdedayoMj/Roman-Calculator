import React, { Component } from 'react'


import './Button.css'

export default class RomButton extends Component {
  render() {
    return (
    <div  data-testid="button" className="btn_btn" onClick={()=>this.props.handleClick(this.props.children)}>
        {this.props.children}
      
    </div>
    )
  }
}
