import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { ContextProvider } from "./context/MainContext.jsx";

let route = document.getElementById("root")

ReactDOM.createRoot(route).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
