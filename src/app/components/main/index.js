/*
 * @Author: aran.hu 
 * @Date: 2017-03-06 10:49:21 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-10 13:54:46
 */



import React, { Component, PropTypes } from 'react'
import './style.scss'
import {
  Button
} from '../../common'

export default class Main extends Component {
	constructor() {
		super()
		this.state = {}
	}

	componentDidMount () {
		setTimeout( () => {
			this.setState({imageSrc: 'http://img15.3lian.com/2016/h1/143/2.jpg'})
		}, 2000);
	}
	

  render() {
    return (
      <div className='main'>
				<ul>
					<li>布局</li>
					<li>常用标签使用</li>
					<li>css常用</li>
					<li>css 伪元素</li>
					<li>Flex 布局 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html</li>
						 http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
					<li>react dom</li>
					<li>css动画 http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html</li>
					<li>react动画</li>
					<li>react-router</li>
				</ul>
				<div className='box'>
					<div className="box box-1">
						<div className="box box-1 div">box-1</div>
					</div>
					<div className="box box-2">
						<div className="box box-2 div">box-2</div>
					</div>
				</div>
      </div>
    )
  }
}

