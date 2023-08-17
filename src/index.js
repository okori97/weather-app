import React from "react";
import "raf/polyfill";
// import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";

render(<App />, document.getElementById("root"));
