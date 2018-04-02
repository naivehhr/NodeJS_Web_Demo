/*
 * @Author: aran.hu 
 * @Date: 2017-03-06 10:49:21 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-03-14 17:38:13
 */



import React, { Component, PropTypes } from 'react'
import './style.scss'
import {
  Button
} from '../../common'
// require('isomorphic-fetch');
// require('es6-promise').polyfill();
export default class Main extends Component {
	constructor() {
		super()
		this.state = {}
	}

	componentDidMount () {
		document.cookie = 'cookies=110111'
		setTimeout( () => {
			this.setState({imageSrc: 'http://img15.3lian.com/2016/h1/143/2.jpg'})
		}, 2000);
		setTimeout( () => {
			console.log('123');
		}, 2000);
	}
	
	huharoanonClick = () => {
		try {
			fetch("http://localhost:3000/api", {
			credentials: 'include',
			method: "GET",
			headers: {
				"content-type": "application/x-www-form-urlencoded111",
				"huhaoran": "asdf"
			},
		}).then(function(res) {
				console.log("123123")
			}, function(e) {
		});
		} catch(e) {
			console.log(e)
		}
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
				<button onClick={this.huharoanonClick} >
					点我啊
					</button>
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

