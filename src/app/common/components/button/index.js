/*
 * @Author: aran.hu 
 * @Date: 2017-03-03 14:13:31 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-03 17:54:34
 */

import React, { Component, PropTypes } from 'react'
import './style.scss'
export default class Button extends Component {

  constructor(){
    super()
    this.state = {
      text: '按钮'
    }
  }

  componentDidMount () {
    const { text } = this.props
    if (text) {
      this.setState({
        text: text
      })
    }
  }
  

  onclick = () => {
    console.log('123123');
  }
  
  render() {
    const { text } = this.state
    const { style } = this.props

    return (
      <div className='btn-wrapper' style={{...style}}>
       <div className='btn-inner' onClick={this.a}>
         {text}
       </div>
      </div>
    )
  }
}