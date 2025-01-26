import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { LikeContextProvider } from "./context/LikesContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LikeContextProvider>
    <App />
  </LikeContextProvider>
);
