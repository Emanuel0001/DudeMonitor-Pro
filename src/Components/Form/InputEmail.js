import { useState } from "react";
import "./Input.css";

const InputEmail = ({ onEmailChange }) => {
  console.log();

  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    onEmailChange && onEmailChange(newEmail, isEmailValid);

    const emailDiv = document.getElementById("email");
    if (regexEmail.test(newEmail)) {
      emailDiv.style = "color: #633cff";
      emailDiv.style = "border: solid 1px #633cff"
      setIsEmailValid(true);
    } else {
      emailDiv.style = "color: red";
      emailDiv.style = "border: solid 1px red"
      setIsEmailValid(false);
    }
  };

  return (
    <div>
      <label htmlFor="password" className="label">
        Email
      </label>
      <input
        type="email"
        placeholder="e.g.alex@email.com"
        id="email"
        onChange={handleEmailChange}
        required
      />
    </div>
  );
};

export default InputEmail;
