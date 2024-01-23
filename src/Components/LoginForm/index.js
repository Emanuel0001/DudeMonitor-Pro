import "./LoginForm.css";
import Button from "../Button";
import { useState } from "react";
import InputEmail from "../Form/InputEmail";
import InputPassword from "../Form/InputPassword";

const LoginForm = ({ retorno }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  console.log("button is", isButtonDisabled);


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

  function validateForm () {
    if (emailValid && passwordValid) {
      return false
    } else {
      return true
    }
  };

  return (
    <form className="containerLoginForm">
      <InputEmail onEmailChange={handleEmailChange} />
      <InputPassword onPasswordChange={handlePasswordChange} />
      <Button isDisabled={validateForm()} value="Login" />
    </form>
  );
};

export default LoginForm;
