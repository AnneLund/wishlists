import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./StyledComponents/Globals.Styled";
import Header from "./Components/Header/Header";
import FlashMessages from "./Components/FlashMessages/FlashMessages";
import Modal from "./Components/Modal/Modal";
import Succes from "./Components/Succes/Succes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <GlobalStyle />
      <FlashMessages />
      <Modal />
      <Succes />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
