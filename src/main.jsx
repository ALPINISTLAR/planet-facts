import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

// createRoot ni ishlatish
const reactRoot = createRoot(root);

// React.StrictMode ni olib tashlash
reactRoot.render(
  <Router>
    <App />
  </Router>
);
