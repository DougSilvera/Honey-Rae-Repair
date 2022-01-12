import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repairs } from "./components/repairs.js";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Repairs />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
