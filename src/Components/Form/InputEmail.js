import { useState } from 'react';
import './Input.css'

const InputEmail= ({ onEmailChange }) => {
  console.log()
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const emailDiv = document.getElementById("email")
    if(newEmail.length <= 1){
      emailDiv.style = "color: red"
    }
    onEmailChange(newEmail);
  };

  return (
    <div>
      <label htmlFor="password" className="label">Email
      </label>
        <input
         type="email"
         placeholder="e.g.alex@email.com"
         id='email'
         value={email}
         onChange={handleEmailChange}
         required
        />
    </div>
  );
}

export default InputEmail;
