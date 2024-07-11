import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const darkTheme = useSelector(state => state.darkTheme);
  console.log(darkTheme);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: 10 })
  }
  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: 10 })
  }

  const togleTheme = () => {
    dispatch({ type: 'TOGLE_THEME' })
  }

  const switchTheme = darkTheme ? 'dark' : 'light'



  return (
    <div className={switchTheme}>
      <h1 className={switchTheme}>Ваш баланс: {cash}</h1>
      <button className={switchTheme} onClick={() => addCash()}>Положить 10</button>
      <button className={switchTheme} onClick={() => getCash()}>Снять 10</button>
      <button className={switchTheme} onClick={() => togleTheme()}>Сменить тему</button>
    </div >
  );
};

export default App;