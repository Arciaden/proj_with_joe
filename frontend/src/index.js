import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChecklistContextProvider } from './context/ChecklistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChecklistContextProvider>
      <App />
    </ChecklistContextProvider>
  </React.StrictMode>
);