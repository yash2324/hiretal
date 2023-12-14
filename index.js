import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const AppLayout = () => {
  return (
    <>
      <a href="/" className="logo-link">
        <h1 className="logo">💥Hiretal</h1>
      </a>

      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
