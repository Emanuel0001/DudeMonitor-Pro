import "./LoginForm.css";
import Button from "../Button";
import { useState } from "react";
import InputEmail from "../Form/InputEmail";
import InputPassword from "../Form/InputPassword";
import axios from "axios";

const LoginForm = ({ retorno }) => {
  const url = "http://localhost:3001/login";

  const [emailUser, setEmail] = useState("");
  const [passwordUser, setPassword] = useState("");

  const user = {
    email: emailUser,
    password: passwordUser
  };
  
  const [emailValid, setValidEmail] = useState();
  const [passwordValid, setValidPassword] = useState();

  const handleEmailChange = (newEmail, isEmailValid) => {
    setEmail(newEmail);
    setValidEmail(isEmailValid);
  };

  const handlePasswordChange = (newPassword, isPasswordValid) => {
    setPassword(newPassword);
    setValidPassword(isPasswordValid);
  };

  function validateForm() {
    if (emailValid && passwordValid) {
      return false;
    } else {
      return true;
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
      axios.post(url, user)
      .then((response) => {
        const data = response.data;
        console.log(data.message)
      })
      .catch((error) => console.log(error));
    console.log("submitou");
    };

  return (
    <form className="containerLoginForm" onSubmit={submitForm}>
      <InputEmail onEmailChange={handleEmailChange} />
      <InputPassword onPasswordChange={handlePasswordChange} />
      <Button isDisabled={validateForm()} value="Login" />
    </form>
  );
};

export default LoginForm;
