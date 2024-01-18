import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HairColor from "./pages/HairColor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hair-color",
    element: <HairColor />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
