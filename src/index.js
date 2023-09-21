import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <>
        <h1 style={{color: "red"}}>sorry....</h1>
      </>
    ),
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);


serviceWorkerRegistration.register();
