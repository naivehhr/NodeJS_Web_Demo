/*
 * @Author: aran.hu
 * @Date: 2017-03-02 18:12:17
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-03 18:07:29
 */



import React, { Component, PropTypes } from 'react'
import './style.scss'

import {
  Button
} from '../../common'
export default class Header extends Component {
  render() {
    return (
      <section className='header'>
        <div className='header-main-top'>
          <div className='header-main-top-text'>
            命运总是颠沛流离
          </div>
          <div className='header-main-top-text-1'>
            我是小标题
          </div>
        </div>
        <div className="header-main-bottom">
          <div className="header-main-bottom-inner">
           <div className='header-main-bottom-inner-btn' >
            <Button text={'首页'} />
           </div>
           <div className='header-main-bottom-inner-btn' >
            <Button text={'文章归档'} style={{ marginLeft: '10px' }} />
           </div>
           <div className='header-main-bottom-inner-btn' >
            <Button text={'作品'} style={{ marginLeft: '10px' }} />
           </div>
           <div className='header-main-bottom-inner-btn' >
            <Button text={'联系我'} style={{ marginLeft: '10px' }} />
           </div>
           <div className='header-main-bottom-inner-btn' >
            <Button text={'博客源码'} style={{ marginLeft: '10px' }} />
           </div>
          </div>
        </div>
      </section>
    )
  }
}
