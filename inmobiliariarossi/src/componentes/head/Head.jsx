import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../head/style.css";
import log3 from "../head/img/logo.png";
import { Button } from "@chakra-ui/react";

import { Outlet, Link } from "react-router-dom";
import Register from "../registro/Register";
import Login from "../login/Login1";

const Head = () => {
  return (
    <section className="navba2">
      <div>
        <ul className="listmenu">
          <li className="textnav">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className="textnav">
            <Link to={"empresa/"}>Empresa</Link>
          </li>
          <li className="textnav">
            <Link to={"admin/"}>Servicios</Link>
          </li>
          <li className="textnav">
            <Link to={"contacto/"}>Contactos</Link>
          </li>
        </ul>
      </div>
      <div>
        <Login />
        <Register />
      </div>
    </section>
  );
};

export default Head;
