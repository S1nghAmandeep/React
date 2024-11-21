# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Creating & Using Context
Your task is to add a "theming" feature to a demo app you're given by a colleague. This "theming" feature should be implemented with help of React's Context API.

Your main goal is to ensure that the "Toggle Theme" button in the Header component triggers a (to-be-added) toggleTheme() function exposed through context.

The context value should be dynamic and managed inside the ThemeContextProvider.js file. The current theme mode should be managed as a value that's either  'light' or 'dark' and exposed via a theme property on the overall context object.

The context object should also expose the above-mentioned toggleTheme() method that changes the theme property's value ('light' <-> 'dark').

The Header component needs access to the context to call the toggleTheme() method, the Page component will need access to apply a the CSS class 'light' (for theme === 'light') or the class 'dark' (theme === 'dark') to the <div id="app">.

In the end, the app should look like this if the theme was not changed or switched multiple times (i.e., 'light' mode):