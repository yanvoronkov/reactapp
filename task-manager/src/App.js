// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Менеджер задач</h1>
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
