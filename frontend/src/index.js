// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // or use MemoryRouter if needed
import App from './App';

// Render the App component within the Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
