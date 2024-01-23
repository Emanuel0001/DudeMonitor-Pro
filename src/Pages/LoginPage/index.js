import React from "react";

import "./Login.css";
import Logotipo from "../../Components/Logotipo";
import LoginForm from "../../Components/LoginForm";

function LoginPage() {
  
  const realmenteRecebi = (newEmail) => {
    console.log('estou na pagina principal', newEmail)
  }
  return (
    <div className="login-container">
      <Logotipo />
      <div className="conteudo">
        <h2>login</h2>
        <p>Add your details below to get back into the app</p>
      </div>
        <LoginForm retorno={realmenteRecebi}/>
    </div>
  );
}

export default LoginPage;
