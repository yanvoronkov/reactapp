
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddProduct from './components/AddProduct';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)
  return (
    <div className="App">
      <AddProduct />
    </div>
  );
}

export default App;
