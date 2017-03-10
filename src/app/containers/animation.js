/*
 * @Author: aran.hu 
 * @Date: 2017-03-10 13:51:07 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-10 13:51:34
 */


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AnimationTest from '../components/animation'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect()(AnimationTest)
