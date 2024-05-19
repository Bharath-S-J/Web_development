import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from the client build (experimental)
import './index.css'; // Import CSS styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import function for reporting web vitals

// Create a root instance using ReactDOM.createRoot() and attach it to the 'root' element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root using React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure and report web vitals (e.g., performance metrics)
reportWebVitals();
