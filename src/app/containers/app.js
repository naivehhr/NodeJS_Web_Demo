/*
 * @Author: aran.hu
 * @Date: 2017-03-02 11:05:50
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-10 13:55:35
 */

import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import Counter from './counter'
import Header from './header'
import Main from './Main'

import AnimationTest from './animation'
import '../common/style/common.scss'
export default class App extends Component {
  render () {
    return (
			<div>
        <Header />
        <Main />
        <AnimationTest />
			</div>
		)
  }
}
