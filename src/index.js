import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import {createStore, applyMiddleware} from "redux"; //untuk REACT 12 Redux Async
// import thunk from "redux-thunk";//untuk REACT 12 Redux Async
import App from './App'; //React biasa tanpa redux
// import store from "../src/app/store";  //untuk REACT 11 Redux Counter
// import App from './React 12 Redux Async/components/App';  //untuk REACT 12 Redux Async

import store from "../src/components/React Form/app/store"; //untuk Redux Form
// import App from '../src/components/React Form/components/App'; // untuk Redux Form

// import reducers from "./Redux Async/reducers";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// const store = createStore(reducers, applyMiddleware(thunk)); //untuk REACT 12 Redux Async

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
