import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Main from "./componentes/main/Main";
import Header from "./componentes/head/Head";
import Footer from "./componentes/footer/Footer";
import Admin from "./componentes/Admin/Admin";
import ErrorPage from "./ErrorPage";
import Propiedad from "./componentes/Propie3dades/Propiedad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "inmueble/:id",
    element: <Propiedad />,
    errorElement: <ErrorPage />,
  },
  {
    path: "admin/",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
