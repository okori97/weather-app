import React from "react";
import "raf/polyfill";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
