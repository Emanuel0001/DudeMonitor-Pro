import "./LoginForm.css";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import urls from "../config/urls";
import CustomInput from "../Form/input";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = ({ retorno }) => {
  const url = urls.postLogin;
  const navigate = useNavigate();

  const [message, setIsMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

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

  const user = {
    email: email,
    password: password,
  };

  function validateForm() {
    if (isEmailValid && isPasswordValid) {
      return false;
    } else {
      return true;
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post(url, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { token, id } = response.data;
        const { status } = response;
        const mensagem = response;

        setIsMessage(mensagem);
        if (status === 200) {
          localStorage.setItem("tokenOfAccess", token);
          localStorage.setItem("idOfUser", id);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        const status = error.response.status;
        switch (status) {
          case 401:
            setEmail("");
            setPassword("");
            toast.error("Email ou senha inválidos.");
            break;
          case 404:
            setEmail("");
            setPassword("");
            toast.error("Email não cadastrado.");
            break;
          default:
            // Caso o status não seja 401 ou 404, você pode lidar com outros casos aqui
            // Por exemplo, exibir uma mensagem genérica de erro
            toast.error("Ocorreu um erro. Por favor, tente novamente mais tarde.");
        }
      });
  };

  return (
    <form className="containerLoginForm" onSubmit={submitForm}>
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
      <div>{message}
      <ToastContainer />
      </div>
      <Button isDisabled={validateForm()} value="Login" />
    </form>
  );
};

export default LoginForm;
