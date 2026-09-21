// main.jsx — THE STARTING POINT of the app
//
// WHAT HAPPENS HERE (step by step):
// 1. We find the <div id="root"> in index.html
// 2. We put our <App /> component inside it
// 3. React then shows the whole shop on the screen
//
// <React.StrictMode> only helps developers find mistakes.
// It does NOT change what the user sees.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Find the empty div in index.html and render our app inside it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);