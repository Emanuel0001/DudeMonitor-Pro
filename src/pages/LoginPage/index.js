import React from "react";

import "./Login.css";
import Logotipo from "../../components/Logotipo";
import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const realmenteRecebi = (newEmail) => {
    console.log('estou na pagina principal', newEmail)
  }

  const irParaCadastro = () => {
    navigate('/register')
  }

  return (
    <div className="login-container">
      <Logotipo />
      <div className="conteudo">
        <p>Welcome the DudeMonitor Pro</p> 
        <h2>login</h2>
      </div>
        <LoginForm retorno={realmenteRecebi}/>
        <div className="create_account">
          <p>Não tem uma conta? </p> <a onClick={irParaCadastro} >Create Account</a>
        </div>
    </div>
  );
}

export default LoginPage;
