import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Todo: Create & manage context in this file
// const ThemeContext = React.useContext();
export const ThemeContext = createContext({
  setTheme: () => {},
  theme: '',
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevValue) => {
      return prevValue === "light" ? "dark" : "light";
    });
  }

  const ctxValue = {
    setTheme: toggleTheme,
    theme: theme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}

// Aggiungi i tipi di proprietà con PropTypes
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // `children` deve essere un nodo React e obbligatorio
  };