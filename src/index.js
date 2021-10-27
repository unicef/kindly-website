import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL
  ? process.env.REACT_APP_PUBLIC_URL
  : "http://localhost:3000";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.body
);
