/*
 * @Author: aran.hu 
 * @Date: 2017-03-02 10:57:57 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-02 10:59:59
 */

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
