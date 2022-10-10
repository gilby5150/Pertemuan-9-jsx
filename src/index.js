import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import App from './Redux Async/components/App';
import reducers from "./Redux Async/reducers"

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  // Once the store is created, we can make it available to our React components by putting a React Redux <Provider> around our application in src/index.js.
  // Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:
  <Provider store={store}>
    <App />
  </Provider>,
  // document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
