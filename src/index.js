import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./Store/AppContext";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </BrowserRouter>
);
