import { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../head/style.css";
import log1 from "../head/img/facebook.png";
import log2 from "../head/img/instagram.png";
import log3 from "../head/img/logo.png";


function Head() {
  const [count, setCount] = useState(0);

  return (
    <section class='navba2'>
      <div><img src ={log3} class="logos1"></img></div>
      <div>
      <ul class="listmenu">
          <li class="textnav"><a href='#' class="link">Inicio</a></li>
          <li class="textnav"><a href='#' class="link">Empresa</a></li>
          <li class="textnav"><a href='#' class="link">Servicios</a></li>
          <li class="textnav"><a href='#' class="link">Contactos</a></li>
          <a href="#"><img src={log1} class="logos"></img></a>
          <a href="#"><img src={log2} class="logos"></img></a>
      </ul>
        </div>
      <div>
          <button class="button1">Ingresar</button>
          <button class="button1">Registrarse</button>
      </div>
    </section>
      
  );
}

export default Head;
