import { dividerClasses } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Login from "../../componentes/login/Login";

function PageLog() {
    return(
        <div>
            <div>
                <h1>Area administrativa</h1>
                <Link to={"/"}>
                    <button> Vaolver</button>
                </Link>
            </div>
            <dvi>
                <Login/>
            </dvi>
        </div>


    )
}

export default PageLog