import { useState, useCallback , memo } from 'react';

function Prova() {
  const [count, setCount] = useState(0);

  // Senza `useCallback`, questa funzione verrebbe ricreata ad ogni render
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <Child onClick={handleClick} />
    </div>
  );
}

const Child = memo(function Child({ onClick }) {
  console.log("Render Child");
  return <button onClick={onClick}>Aumenta Contatore</button>;
})

export default Prova;