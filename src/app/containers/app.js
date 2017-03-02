/*
 * @Author: aran.hu 
 * @Date: 2017-03-02 11:05:50 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-02 11:17:14
 */

import React, { Component } from 'react'
// import { Link } from 'react-router'
import { connect } from 'react-redux'
import Counter from './Counter'
export default class App extends Component {
  render () {
    return (
			<div>
				<Counter />
			</div>
		)
  }
}