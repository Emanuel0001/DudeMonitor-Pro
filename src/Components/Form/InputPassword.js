import { useState } from 'react';
import './Input.css'

const InputPassword= ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');
  
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if(password.length > 0) {
        const div = document.getElementById("password")
        div.style = "color: red"
    }

    onPasswordChange(newPassword)
  }
  return (
    <div>
      <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          name="password"
          id='password'
          value={password}
          onChange={handlePasswordChange}
          required
        />
    </div>
  );
}

export default InputPassword;