import React from "react";
import "./styles.css";
import head from "../../../src/assets/images/head.png";

function ChatPage() {
  return (
    <div id="page-home">
      <section className="side-bar">
        <div className="side-bar-content">
          <img src={head} alt="head" width="192" height="125" />
          <h1>
            Você está<p>conversando </p>{" "}
            <p>
              com <a>C3PO</a>
            </p>
          </h1>
        </div>
      </section>
      <div className="content">
        <input placeholder="Digite sua mensagem..." />
        <button></button>
      </div>
    </div>
  );
}

export default ChatPage;
