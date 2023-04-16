import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <HttpsRedirect>
            <App/>
          </HttpsRedirect>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();