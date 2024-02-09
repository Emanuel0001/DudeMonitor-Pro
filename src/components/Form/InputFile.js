import "./Input.css";

const InputFile = ({onDataChange}) => {
    const handleFileChange = (event) => {
        const newFile = event.target.value;
        onDataChange(newFile);
    }
    return (
      <div>
      <label className="label" htmlFor="selecao-arquivo">
        Backup:
      </label>
      <label id="file" htmlFor="selecao-arquivo">
        Selecionar um arquivo &#187;
      </label>
      <input
        id="selecao-arquivo"
        type="file"
        placeholder="digite o SSID da antena"
        onChange={handleFileChange}
      />
    </div>
    )
}

export default InputFile;
