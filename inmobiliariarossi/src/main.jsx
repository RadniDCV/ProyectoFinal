import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

import Main from "../src/componentes/main/Main"
import Header from "./componentes/head/Head"
import Footer from './componentes/footer/Footer'
import Admin from "./componentes/Admin/Admin"
import ErrorPage from './ErrorPage'
import Propiedad from "./componentes/Propie3dades/Propiedad"

import Contactos from "./componentes/contactos/Contactos";
import Login from "./componentes/login/Login";
import Empresa from './componentes/Empresa';
import Servicios from './componentes/Servicios';
import Registro from './componentes/registro/Registro';








const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/inmueble/:id",
    element: <Propiedad />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/admin/",
    element: <Admin />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Contacto",
    element: <Contactos />,
    errorElement: <ErrorPage/>,
  },

  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Empresa",
    element: <Empresa />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Servicios",
    element: <Servicios />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Registro",
    element: <Registro />,
    errorElement: <ErrorPage/>
  },




]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <RouterProvider router={router}/>      
      <Footer />
  </ChakraProvider>
 </React.StrictMode>
)
