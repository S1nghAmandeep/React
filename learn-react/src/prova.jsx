import { useState, useCallback } from "react";
import Button from "./Button";

function Prova() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Clicked ");

  // Senza `useCallback`, questa funzione verrebbe ricreata ad ogni render
  const handleClick = useCallback(() => {
    setCount((prev) => {
      const newValue = prev + 1;
      if (prev % 2 === 0) {
        setName(`clicked even ${prev + 1} times`);
      }
      return newValue;
    });
  }, []);

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <Button clicked={name} onClick={handleClick} />
    </div>
  );
}

export default Prova;
