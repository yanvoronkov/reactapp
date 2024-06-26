import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a>
        <Message text="Hello World!" />
      </header>
    </div>
  );
}

//Создать компонент Message, отображающий переданный ему props текст.

function Message({ text }) {
  return <p>{text}</p>;
}

export default App;
