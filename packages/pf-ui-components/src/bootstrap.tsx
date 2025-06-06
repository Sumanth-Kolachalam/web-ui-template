import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Ensure the root element exists and is correctly typed
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element with id "root" not found');
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);