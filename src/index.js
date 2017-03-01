import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

// let store = createStore(todoApp)
let store

// ReactDOM.render(<App />, document.getElementById('root'));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
