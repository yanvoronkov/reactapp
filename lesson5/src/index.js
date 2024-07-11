import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = {
  cash: 5,
  darkTheme: false
}


const reduser = (state = defaultState, action) => {

  switch (action.type) {

    case 'ADD_CASH':
      return {
        ...state,
        cash: state.cash + action.payload
      }
    case 'GET_CASH':
      return {
        ...state,
        cash: state.cash - action.payload
      }
    case 'TOGLE_THEME':
      return {
        ...state,
        darkTheme: !state.darkTheme
      }

    default:
      return state;
  }
}

const store = createStore(reduser);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

