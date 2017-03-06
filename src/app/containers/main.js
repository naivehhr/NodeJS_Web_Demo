/*
 * @Author: aran.hu 
 * @Date: 2017-03-06 10:51:33 
 * @Last Modified by:   aran.hu 
 * @Last Modified time: 2017-03-06 10:51:33 
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/main'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect()(Main)
