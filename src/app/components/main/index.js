/*
 * @Author: aran.hu 
 * @Date: 2017-03-06 10:49:21 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-06 11:19:47
 */



import React, { Component, PropTypes } from 'react'
import './style.scss'

import {
  Button
} from '../../common'
export default class Main extends Component {
  render() {
    return (
      <div className='main'>
				<ul>
					<li>布局</li>
					<li>常用标签使用</li>
					<li>css常用</li>
					<li>react dom</li>
					<li>css动画 http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html</li>
					<li>react动画</li>
					<li>react-router</li>
				</ul>
      </div>
    )
  }
}
