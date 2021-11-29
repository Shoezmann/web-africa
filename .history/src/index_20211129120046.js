import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './sections/App';


// eslint-disable-next-line import/no-webpack-loader-syntax


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);