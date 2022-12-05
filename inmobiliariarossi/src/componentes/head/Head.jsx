import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../head/style.css";
import log3 from "../head/img/logo.png";
import {
  
  Button
 
} from "@chakra-ui/react";

import Login from "../login/Login"

const Head = () => {
 
  return (
    <section class='navba2'>
      <div><img src ={log3} class="logos1"></img></div>
      <div>
      <ul class="listmenu">
          <li class="textnav"><a href='#' class="link">Inicio</a></li>
          <li class="textnav"><a href='#' class="link">Empresa</a></li>
          <li class="textnav"><a href='#' class="link">Servicios</a></li>
          <li class="textnav"><a href='#' class="link">Contactos</a></li>
         
      </ul>
        </div>
      <div>
        <Button
          bg={"#414141"}
          color={"#bcc1ca;"}
          size="sm"
          _hover={{ bg: "#616161", boxShadow: "lg" }}
          margin = {"15px"}
        >
        Ingresar 
        </Button>

         <Button
          bg={"#414141"}
          color={"#bcc1ca;"}
          size="sm"
          _hover={{ bg: "#616161", boxShadow: "lg" }}
          margin = {"15px"}
        >
          Registrarse
        </Button> 
         
      </div>
    </section>
      
  );
}

export default Head;
