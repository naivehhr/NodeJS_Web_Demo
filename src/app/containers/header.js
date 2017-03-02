/*
 * @Author: aran.hu
 * @Date: 2017-03-02 11:03:36
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-02 18:10:14
 */


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect()(Header)
