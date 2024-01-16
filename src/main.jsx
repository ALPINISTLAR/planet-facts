import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

// ReactDOM.render ni createRoot bilan almashtirish
const reactRoot = createRoot(root);

// React.StrictMode ni qo'shish
reactRoot.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
