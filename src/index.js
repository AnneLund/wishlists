import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'
import GlobalStyle from './StyledComponents/Globals.Styled';
import Header from './Components/Header/Header';
import FlashMessages from './Components/FlashMessages/FlashMessages';
import Modal from './Components/Modal/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
  <Header/>
    <GlobalStyle/>
    <FlashMessages/> 
    <Modal/>
    <App />
  </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
