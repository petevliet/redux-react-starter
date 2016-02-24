import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {AppContainer} from './components/App';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    name: 'Peter'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
