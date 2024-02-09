import './Input.css';

const InputIpAdress = ({ onDataChange }) => {
    const handleIPChange = (event) => {
        const newIP = event.target.value;
        onDataChange(newIP);
    }
    return (
        <div>
        <label htmlFor="ip" className="label">
          IP Adress:
        </label>
        <input
          type="text"
          placeholder="Digite o IP Adress da Antena"
          id="ip"
          onChange={handleIPChange}
          required
        />
      </div>
    )
}

export default InputIpAdress;
