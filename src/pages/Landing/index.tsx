import React from "react";
import "./styles.css";
import logo from "../../../src/assets/images/logo.png";

function Landing() {
  return (
    <div id="page-home">
      <section className="side-bar">
        <div className="side-bar-content">
          <h1>Iniciar chat</h1>
          <input placeholder="Digite seu nome" />
          <input placeholder="Digite seu email" />
          <button type="button">INICIAR</button>
        </div>
      </section>
      <div className="content">
        <img src={logo} alt="logo" width="250" height="500" />
        <h1>
          PREENCHA O FORMULÁRIO <p>PARA INICIAR O CHAT</p>
        </h1>
      </div>
    </div>
  );
}

export default Landing;
