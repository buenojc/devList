import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/reset.js';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
