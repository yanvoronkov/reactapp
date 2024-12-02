import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const defaultState = {
  id: 1,
  name: "name",
  description: "description",
  price: 10,
  available: true
}

export const addProduct = {
  type: 'ADD_PRODUCT',
}

const deleteProduct = {
  type: 'DELETE_PRODUCT',
}

const updateProduct = {
  type: 'UPDATE_PRODUCT',
}

const changeAcccess = {
  type: 'CHANGE_ACCESS',
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {}
    default:
      return state
  }
}

const store = configureStore({ reducer: reducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

