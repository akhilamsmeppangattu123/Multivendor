import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context.jsx"; // Import AppProvider
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppProvider>
  </BrowserRouter>
);