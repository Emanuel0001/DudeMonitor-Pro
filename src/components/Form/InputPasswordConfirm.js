import { useState } from 'react';
import './Input.css'

const InputPasswordConfirm= ({ onPasswordChange2 }) => {
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  
  const handlePasswordChange = (event) => {
    const newPassword2 = event.target.value;

    onPasswordChange2 && onPasswordChange2(newPassword2, isPasswordValid);
    
      const div = document.getElementById("password2")
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
     
      if(passwordRegex.test(newPassword2)) {
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
      <label htmlFor="password" className="label">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          name="password"
          id='password2'
          onChange={handlePasswordChange}
          required
        />
        
    </div>
  );
}

export default InputPasswordConfirm;