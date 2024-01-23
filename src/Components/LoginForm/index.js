import "./LoginForm.css";
import Button from "../Button";
import { useState } from "react";
import InputEmail from "../Form/InputEmail";
import InputPassword from "../Form/InputPassword";

const LoginForm = ({retorno}) => {
  
  const handleEmailChange = (newEmail) => {
    // Lógica adicional com o e-mail e a validade, se necessário
    console.log(newEmail);
    retorno(newEmail)
  };

  const handlePasswordChange = (newPassword) => {
    console.log(newPassword)
  }

  const submitForm = () => {

  }
  return (
    <form onSubmit={submitForm}className="containerLoginForm">
        <InputEmail onEmailChange={handleEmailChange} />
        <InputPassword onPasswordChange={handlePasswordChange} />
        <Button value="Login"/>
    </form>
  );
};

export default LoginForm;
