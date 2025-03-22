import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Correct path since App.js is directly inside src/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
