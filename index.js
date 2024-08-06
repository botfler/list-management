// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoProvider } from './TodoContext';  // Ensure you import the provider

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
