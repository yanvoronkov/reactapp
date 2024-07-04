import './App.css';
import StateTextFields, { TemperatureConverter } from './TemperatureConverter';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <div className="TempConverter">
        <h2>Конвертер температур</h2>
        <TemperatureConverter />
      </div>
      <div className="ToDoList">
        <h2>Список дел</h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
