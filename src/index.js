import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { Provider } from 'react-redux';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Once the store is created, we can make it available to our React components by putting a React Redux <Provider> around our application in src/index.js.
  // Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
