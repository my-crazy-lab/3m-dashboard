import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './AppProvider/App';

const  myRootElement = document.getElementById('root')

if(!myRootElement) {
  throw new Error("Don't find element have id = 'root'")
}
const root = ReactDOM.createRoot(myRootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
