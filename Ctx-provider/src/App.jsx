import Page from "./Page";
import ThemeContextProvider from "./ThemeCtxProvider.jsx";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
