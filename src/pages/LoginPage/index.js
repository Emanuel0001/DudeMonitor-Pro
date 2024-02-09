import React from "react";

import "./Login.css";
import Logotipo from "../../components/Logotipo";
import LoginForm from "../../components/LoginForm";

function LoginPage() {

  const realmenteRecebi = (newEmail) => {
    console.log('estou na pagina principal', newEmail)
  }

  return (
    <div className="login-container">
      <Logotipo />
      <div className="conteudo">
        <p>Welcome the DudeMonitor Pro</p> 
        <h2>login</h2>
      </div>
        <LoginForm retorno={realmenteRecebi}/>
    </div>
  );
}

export default LoginPage;
