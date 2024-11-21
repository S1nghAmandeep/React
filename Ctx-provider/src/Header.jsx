import { useContext } from "react";
import { ThemeContext } from "./ThemeCtxProvider";

export default function Header() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={setTheme}>Toggle Theme</button>
    </header>
  );
}