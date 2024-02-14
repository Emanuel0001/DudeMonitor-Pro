import "./Input.css";

const InputFile = ({label, type, placeholder, onChange}) => {
    return (
      <div>
      <label className="label" htmlFor="selecao-arquivo">
      {`${label}:`}
      </label>
      <label id="file" htmlFor="selecao-arquivo">
        Selecionar um arquivo &#187;
      </label>
      <input
        id="selecao-arquivo"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
    )
}

export default InputFile;
