import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppHook from './AppHook';
// import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const element = 
  <React.StrictMode>
    <App myCount={10}/>
    <AppHook myCount={22}/>
  </React.StrictMode>
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
