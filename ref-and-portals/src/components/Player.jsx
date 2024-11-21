import { useState, useRef } from "react";

export default function Player() {
  const playerInput = useRef();

  const [entredPlayerName, setEntredPlayerName] = useState(null);


  function handleClick() {
    console.log(playerInput.current.onclick);
        
    setEntredPlayerName(playerInput.current.value);
    playerInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {entredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerInput}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
