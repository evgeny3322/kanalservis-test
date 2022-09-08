import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter;
}`;

const theme = {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 960px) and (min-width: 600px)',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <Global />
              <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
