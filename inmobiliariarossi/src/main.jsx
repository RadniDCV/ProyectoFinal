import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Errorpage";
import Contactos from "./componentes/contactos/Contactos";
import Empresa from "./componentes/Empresa";
import Servicios from "./componentes/Servicios";
import Main from "./componentes/main/Main";
import Propiedad from "./componentes/Propie3dades/Propiedad";
import Admin from "./componentes/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "contacto/",
    element: <Contactos />,
    errorElement: <ErrorPage />,
  },

  {
    path: "empresa/",
    element: <Empresa />,
    errorElement: <ErrorPage />,
  },
  {
    path: "servicios/",
    element: <Servicios />,
    errorElement: <ErrorPage />,
  },

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
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
