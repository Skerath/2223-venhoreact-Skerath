import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import MyAuth0Provider from "./contexts/MyAuth0Provider";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <MyAuth0Provider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MyAuth0Provider>
    </React.StrictMode>
);