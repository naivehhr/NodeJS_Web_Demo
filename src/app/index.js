import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
// import App from './App';

import { Provider } from 'react-redux'
import ConfigureStore from './store/configureStore'

const store = ConfigureStore()
// ReactDOM.render(<App />, document.getElementById('root'));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
