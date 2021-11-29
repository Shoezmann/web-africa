import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './sections/App';


require('file-loader?name=[name].[ext]!./index.html');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);