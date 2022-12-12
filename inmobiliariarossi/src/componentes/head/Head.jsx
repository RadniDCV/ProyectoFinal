import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../head/style.css";
import log3 from "../head/img/logo.png";
import {
  
  Button
 
} from "@chakra-ui/react";

import { Outlet,Link } from "react-router-dom";

const Head = () => {
 
  return (
    <section class='navba2'>
      <div><img src ={log3} class="logos1"></img></div>
      <div>
      <ul class="listmenu">
          <li class="textnav"><Link to={"/"}>Inicio</Link></li>
          <li class="textnav"><Link to={"/Empresa"}>Empresa</Link></li>
          <li class="textnav"><Link to={"/Servicios"}>Servicios</Link></li>
          <li class="textnav"><Link to={"/Contacto/"}>Contactos</Link></li>
          
      </ul>
        </div>
      <div>
        <Link to={"/login"}>
        <Button
          bg={"#414141"}
          color={"#bcc1ca;"}
          size="sm"
          _hover={{ bg: "#616161", boxShadow: "lg" }}
          margin = {"15px"}
        >
        Ingresar 
        </Button>
        </Link>

        <Link to={"/Registro"}>
         <Button
          bg={"#414141"}
          color={"#bcc1ca;"}
          size="sm"
          _hover={{ bg: "#616161", boxShadow: "lg" }}
          margin = {"15px"}
        >
          Registrarse
        </Button> 
        </Link>
         
      </div>
    </section>
      
  );
}

export default Head;
