import './Input.css';

const InputName = ({onDataChange}) => {
    const handleSSIDChange = (event) => {
        const newSSID = event.target.value;
        onDataChange(newSSID);
    }
    return (
        <div>
        <label htmlFor="name" className="label">
          SSID:
        </label>
        
        <input
          type="text"
          placeholder="Digite o SSID da antena"
          id="sid"
          onChange={handleSSIDChange}
          required
        />
      </div>
    )
}

export default InputName;
