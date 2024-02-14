import "./Input.css";

const CustomInput = ({ id, type, placeholder, value, onChange, label }) => {
    return (
      <div>
      <label htmlFor="password" className="label">
       {`${label}:`}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
    )
}

export default CustomInput;