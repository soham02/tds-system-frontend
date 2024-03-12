import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BroserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BroserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BroserRouter>
  </React.StrictMode>
);
