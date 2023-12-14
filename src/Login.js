import "./style/Login.css";
import React, { useState } from 'react';
import Logo from "./images/logo-devlinks-large.svg";
import IconEmail from "./images/icon-email.svg"
import IconPassword from "./images/icon-password.svg"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const div = document.getElementById('email')
        const label = document.getElementById('label-email')
        if(emailRegex.test(newEmail)){
            div.style.border = " solid 1px #633CFF"
            label.style.color = "#633CFF";
            setIsEmailValid(true);
        }
        else {
            div.style.border = " solid 1px red"
            label.style.color = "red"
            setIsEmailValid(false);
        }
      };

      const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
        
        const div = document.getElementById('password')
        const label = document.getElementById('label-password')
        if(newPassword.length >= 8){
            div.style.border = " solid 1px #633CFF"
            label.style.color = "#633CFF"
            setIsPasswordValid(true)
        }
        else {
            div.style.border = " solid 1px red"
            label.style.color = "red"
            setIsPasswordValid(false)
        }
      };

      const disabledButton = () => {
        if (isEmailValid && isPasswordValid) {
          return false;
        } else {
          console.log("true");
          return true;
        }
      };

  return (
    <div className="login-container">
      <header>
        <img className="logo-devlinks" src={Logo}></img>
      </header>
      <section>
        <form>
          <div>
            <h1> Login</h1>
            <p>Add your details below to get back into the app</p>
          </div>
          
          <label htmlFor="email" id="label-email">Email address</label>
          <div className="input-container">
            <img src={IconEmail} className="input-icon" />
            <input
              type="email"
              placeholder="e.g.alex@email.com"
              id="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              className="inpute"
              required
            />
          </div>
          
          <label htmlFor="password" id="label-password">Password</label>
          <div className="input-container">
            <img src={IconPassword} className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button disabled={disabledButton()} type="submit">Login</button>
        </form>
        <p className="link-register">
          Não tem uma conta? <a href="/register">Cadastre-se</a>
        </p>
      </section>
    </div>
  );
}

export default Login;
