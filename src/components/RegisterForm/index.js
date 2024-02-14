import { useState } from "react";
import Button from "../Button";
import urls from "../config/urls";
import "./RegisterForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CustomInput from "../Form/input";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordValid2, setIsPasswordValid2] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailDiv = document.getElementById("email");
    if (regexEmail.test(newEmail)) {
      emailDiv.style = "color: #633cff";
      emailDiv.style = "border: solid 1px #633cff";
      setIsEmailValid(true);
    } else {
      emailDiv.style = "color: red";
      emailDiv.style = "border: solid 1px red";
      setIsEmailValid(false);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const div = document.getElementById("password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordRegex.test(newPassword)) {
      div.style = "color: purple";
      div.style = "border: solid 1px #633cff";
      setIsPasswordValid(true);
    } else {
      div.style = "color: red";
      div.style = "border: solid 1px red";
      setIsPasswordValid(false);
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const newPassword = e.target.value;
    setPassword2(newPassword);
    const div = document.getElementById("password2");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordRegex.test(newPassword)) {
      div.style = "color: purple";
      div.style = "border: solid 1px #633cff";
      setIsPasswordValid2(true);
    } else {
      div.style = "color: red";
      div.style = "border: solid 1px red";
      setIsPasswordValid2(false);
    }
  };

  const userCadastro = {
    email: email,
    password: password,
    passwordConfirm: password2,
  };

  const cadastrarUsuario = (event) => {
    event.preventDefault();
    const url = urls.cadastroUsuario;
    axios
      .post(url, userCadastro, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const status = response.status;
        if (status === 201) {
          setEmail("");
          setPassword("");
          setPassword2("");
          toast.success("Usuario cadastrado com sucesso");
        }
      })
      .catch((error) => {
        const status = error.response.status;
        if (status === 409) {
          setEmail("");
          setPassword("");
          setPassword2("");
          toast.error("Email já possui cadastro.");
        }
        if (status === 422) {
          toast.error("As senhas estão diferentes");
        }
        console.log(error);
      });
  };

  function validateForm() {
    if (isEmailValid && isPasswordValid && isPasswordValid2) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="container-cadastro-usuario">
      <ToastContainer />
      <div>
        <form onSubmit={cadastrarUsuario}>
          <CustomInput
            label="Email"
            type="email"
            placeholder="your@email.com"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <CustomInput
            label="Password"
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <CustomInput
            label="Confirm password"
            type="password"
            placeholder="password"
            id="password2"
            value={password2}
            onChange={handlePasswordConfirmChange}
          />
          <Button isDisabled={validateForm()} value="Create Account"></Button>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
