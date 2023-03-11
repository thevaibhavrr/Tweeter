import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import { BrowserRouter as Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE,
};
root.render(
  <Route>
    <React.StrictMode>
      <AlertProvider template={AlertProvider} {...options}>
        <App />
      </AlertProvider>
    </React.StrictMode>
  </Route>
);

reportWebVitals();
