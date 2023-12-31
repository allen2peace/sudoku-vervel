import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss"
import {App} from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)