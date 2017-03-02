/*
 * @Author: aran.hu 
 * @Date: 2017-03-02 10:34:14 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-02 10:59:12
 */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import rootRdeucer from '../reducers'


const enhancer = compose(
  applyMiddleware(
    thunk
  )
)

export default function configureStore(initialState) {
  const store = createStore(
    rootRdeucer,
    initialState,
    enhancer
  )
  return store;
}
