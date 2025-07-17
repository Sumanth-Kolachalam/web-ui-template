import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure the root element exists and is correctly typed
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
