import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculadora from './main/Calculadora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculadora/>
    </div>
    
  </React.StrictMode>
);


