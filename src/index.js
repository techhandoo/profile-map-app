import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This should match the path to your App.js
import './index.css'; // Optional, if you have an index.css

// Fallback for process in the browser environment
if (typeof process === 'undefined') {
  window.process = {
    env: {
      NODE_ENV: 'development' // or 'production' based on your environment
    }
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
