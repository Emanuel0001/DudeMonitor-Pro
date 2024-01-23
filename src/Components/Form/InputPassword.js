import { useState } from 'react';
import './Input.css'

const InputPassword= ({ onPasswordChange }) => {
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    onPasswordChange && onPasswordChange(newPassword, isPasswordValid);
    
      const div = document.getElementById("password")
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
     
      if(passwordRegex.test(newPassword)) {
          div.style = "color: purple"
          div.style = "border: solid 1px #633cff"
          setIsPasswordValid(true)
         
      } else {
        div.style = "color: red"
        div.style = "border: solid 1px red"
        setIsPasswordValid(false)
  
      }
    }
 
 
  return (
    <div>
      <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          name="password"
          id='password'
          onChange={handlePasswordChange}
          required
        />
    </div>
  );
}

export default InputPassword;