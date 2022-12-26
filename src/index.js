import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/reset.css"
import "./assets/main.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </>

);
