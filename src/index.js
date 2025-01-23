import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { LikeContextProvider } from "./context/LikesContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         index: true,
//         element: <Home />,
//       },

//       {
//         path: "/about",
//         element: <About />,
//       },

//       {
//         path: "/category",
//         element: <Category />,
//       },
//       {
//         path: "/category/:dataId",
//         element: <Categoryin />,
//       },

//       {
//         path: "/news",
//         element: <News />,
//       },
//     ],
//   },
// ]);
root.render(
  <LikeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LikeContextProvider>
);
