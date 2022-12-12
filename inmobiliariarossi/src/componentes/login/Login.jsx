import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/Rule_user";



import "../login/style.css"

function Login() {
  const [email, setEmail] = useState("");
  const [passw, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credenciales = { email: email, password: passw };
    await login(credenciales)
      .then(() => {
        navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="containerLogin">

      

      <form className="form" onSubmit={handleSubmit}>
        <h2 className="titleForm">Iniciar sesión</h2>

        <label>
          <input
            className="inputForm"
            placeholder="Email"
            required
            type="email"
            value={email}
            onChange={handleEmail}
          />
        </label>

        <br />

        <label>
          <input
            className="inputForm"
            placeholder="Contraseña"
            required
            autoComplete="none"
            type="password"
            value={passw}
            onChange={handlePassword}
          />
        </label>

        <br />
        <br />
        <button className="btnLogin">Entrar</button>
      </form>
    </div>

  );
}

export default Login;
