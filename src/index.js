import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Provider from react-redux.
// Provider makes the Redux store available to all components in the app.
// Without this, components cannot access or update global state.
import { Provider } from 'react-redux';

// Import the Redux store you configured in Store.js.
import { store } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// StrictMode helps highlight potential problems in development.
root.render(
  <React.StrictMode>
    {/* Wrap the App with Provider so that Redux store is accessible everywhere */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Optional: Measure app performance.
// You can log results or send them to an analytics endpoint.
// Example: reportWebVitals(console.log)
reportWebVitals();
