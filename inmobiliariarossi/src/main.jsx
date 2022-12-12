import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./componentes/error-page";
import Contactos from "./componentes/contactos/Contactos";
import Login from "../src/componentes/login/Login";
import Empresa from "./componentes/Empresa";
import Servicios from "./componentes/Servicios";
import Registro from "./componentes/registro/Registro";
import Home from "./componentes/home/Home";
import Main from "./componentes/main/Main";
import Propiedad from "./componentes/Propie3dades/Propiedad";
import Admin from "./componentes/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contacto",
    element: (
      <div>
        <Contactos />
      </div>
    ),
  },

  {
    path: "/Login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Empresa",
    element: (
      <div>
        <Empresa />
      </div>
    ),
  },
  {
    path: "/Servicios",
    element: (
      <div>
        <Servicios />
      </div>
    ),
  },
  {
    path: "/Registro",
    element: (
      <div>
        <Registro />
      </div>
    ),
  },
  {
    path: "/Home",
    element: (
      <div>
        <Home />
      </div>
    ),
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
