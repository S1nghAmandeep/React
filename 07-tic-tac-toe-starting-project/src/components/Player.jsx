import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, nameInput);
    }
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{nameInput}</span>
        ) : (
          <input
            onChange={(e) => setNameInput(e.target.value)}
            type="text"
            value={nameInput}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
