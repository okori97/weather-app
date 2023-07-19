import React from "react";
import "raf/polyfill";
// import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forecast.json";

render(<App location={forecast.location} />, document.getElementById("root"));
