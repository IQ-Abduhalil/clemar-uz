import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "animate.css";
import "swiper/css";

import "aos/dist/aos.css";

import { LikeContextProvider } from "./context/LikesContext";
import App from "./App";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LikeContextProvider>
    <App />
    <ToastContainer />
  </LikeContextProvider>
);
