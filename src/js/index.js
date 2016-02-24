import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/App';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    name: 'Peter'
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
