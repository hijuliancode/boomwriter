import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import GlobalStyle from './theme/globalStyle';
import BoomwriterApp from './BoomwriterApp';

/** Styles */
import { ThemeProvider } from "styled-components";
import * as Theme from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ Theme }>
      <GlobalStyle />
      <BoomwriterApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
