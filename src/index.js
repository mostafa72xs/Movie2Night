import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter} from 'react-router'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PopupProvider } from './components/Context/PopUpcontext';
import { FormProvider } from './components/Context/LoginContext';
import  {Provider}  from 'react-redux';
import Store from "./components/Reducer/store"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={Store}>
            <FormProvider>
                <PopupProvider>
                    <App />
                </PopupProvider>
            </FormProvider>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
