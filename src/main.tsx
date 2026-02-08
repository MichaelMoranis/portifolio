import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import NewPage from "./pages/newPage.tsx";
import Layout from "./components/LayoutRouter/Layout.tsx";
import Works from "./pages/works.tsx";
import Images from "./pages/images.tsx";
import Articles from "./pages/articles.tsx";
import Contact from "./pages/contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Usando o Layout como elemento principal
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "newpage",
        element: <NewPage />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "images",
        element: <Images />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
