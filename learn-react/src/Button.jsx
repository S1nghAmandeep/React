import { memo } from "react";

// eslint-disable-next-line react/prop-types
const Button = memo(function Button({ onClick, clicked }) {
  console.log("Render Button", clicked);
  return <button onClick={onClick}>Aumenta Contatore {clicked}</button>;
});

export default Button;
