import "./LoginForm.css";
import Button from "../Button";
import { useState } from "react";
import InputEmail from "../Form/InputEmail";
import InputPassword from "../Form/InputPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ retorno }) => {
  const url = "http://localhost:3002/login";
  const navigate = useNavigate();

  const [emailUser, setEmail] = useState("");
  const [passwordUser, setPassword] = useState("");

  const user = {
    email: emailUser,
    password: passwordUser,
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
  axios.post (url, user,   {
        headers: {
          "Content-Type": "application/json",
        },
      })
       .then((response)  => {
        const {token, id } = response.data;
        const { status} = response;

       if (status === 200) {
          localStorage.setItem('tokenOfAccess', token);
          localStorage.setItem('idOfUser', id);
          navigate("/dashboard");
        }
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
