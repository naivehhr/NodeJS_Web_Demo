/*
 * @Author: aran.hu 
 * @Date: 2017-03-02 11:02:13 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-02 18:13:59
 */


import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props

    return (
      <p>
        Counter: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>Increment Async</button>
      </p>
    )
  }
}