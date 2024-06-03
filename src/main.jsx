import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/main.scss";
import { Provider } from "react-redux";
import { store } from "./lib/index.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
