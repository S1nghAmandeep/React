import { useEffect } from 'react';
import './App.css'
import { useCounterStore } from './count';

//** IL (getState) STATE SI FA SE SI DICHIARA UNA VARIABILE FUORI DAL COMPONENT */
const decrement = useCounterStore.getState().decrement;  
const reset = useCounterStore.getState().reset;

const setName = () => {
  useCounterStore.setState({name: 'pluto'});
  console.log(useCounterStore.getState().name);
}

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  useEffect(() => {
    setName();
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
