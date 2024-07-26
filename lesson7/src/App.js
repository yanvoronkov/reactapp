// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Каталог продуктов</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
