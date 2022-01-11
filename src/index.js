import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repairs } from "./components/repairs.js";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Repairs />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
