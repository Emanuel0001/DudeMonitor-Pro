import "./style/Register.css";
import React, { useState } from 'react';
import Logo from "./images/logo-devlinks-large.svg";
import IconEmail from "./images/icon-email.svg"
import IconPassword from "./images/icon-password.svg"

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
    
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

      const handleConfirmPasswordChange = (event) => {
        const newPassword = event.target.value;
        setConfirmPassword(newPassword)
        
        const div = document.getElementById('password2')
        const label = document.getElementById('label-password2')

        if(newPassword.length >= 8){
            div.style.border = " solid 1px #633CFF"
            label.style.color = "#633CFF"
            setIsConfirmPasswordValid(true)
        }
        else {
            div.style.border = " solid 1px red"
            label.style.color = "red"
            setIsConfirmPasswordValid(false)
        }
      };

      const disabledButton = () => {
        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
          return false;
        } else {
          console.log("true");
          return true;
        }
      };

  return (
    <div className="login-container">
      <header>
        <img className="logo-devlinks-register" src={Logo}></img>
      </header>
      <section>
        <form>
          <div>
            <h1>Creacte account</h1>
            <p>Let’s get you started sharing your links!</p>
          </div>
          
          <label htmlFor="email" className="label" id="label-email">Email address</label>
          <div className="input-container">
            <img src={IconEmail} className="input-icon" />
            <input
              type="email"
              placeholder="ben@example.com"
              id="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              className="inpute"
              required
            />
          </div>
          
          <label htmlFor="password" className="label" id="label-password">Create password</label>
          <div className="input-container">
            <img src={IconPassword} className="input-icon" />
            <input
              type="password"
              placeholder="*********"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <label htmlFor="password" className="label" id="label-password2">Confirm Password</label>
          <div className="input-container">
            <img src={IconPassword} className="input-icon" />
            <input
              type="password"
              placeholder="*********"
              id="password2"
              name="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <p>Password must contains at least 8 characters</p>
          <button disabled={disabledButton()} type="submit">Create new account</button>
        </form>
        <p className="link-register">
        Already have an account? <a href="/">Login</a>
        </p>
      </section>
    </div>
  );
}

export default Register;
