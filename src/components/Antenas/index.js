import { useEffect, useState } from "react";
import "./Antenas.css";
import { FaFileDownload } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import axios from "axios";
import urls from "../config/urls";

const Antenas = () => {
  const [antenas, setAntenas] = useState([]);
  const url = urls.getAntenas;

  async function buscarAntenas() {
    const id = localStorage.getItem("idOfUser");
    axios
      .get(url, {
        params: {
          user: id,
        },
      })
      .then(async (response) => {
        const data = await response.data;
        setAntenas(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    buscarAntenas();
  });

  //  setInterval(buscarAntenas, 1 * 30 * 1000);
  async function deletaAntena(item) {
    const id = item._id;
    const url = `${urls.deletaAntena}/${id}`; // Supondo que urls.deletaAntena contém a URL base para excluir uma antena
    console.log("Clicou para deletar", id);
    
    try {
        const response = await axios.delete(url);
        const result = response.data;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

  const verificaStatus = (status) => {
    if (status === "up") {
      return <span className="onlineStatus"></span>;
    } else {
      return <span className="offlineStatus"></span>;
    }
  };

  return (
    <div className="container-antenas">
      <div className="conteudo-titulado">
        <h1>Antenas</h1>
        <p>Dashboard</p>
      </div>
      <section className="section-antenas">
        <ul className="lista">
          {antenas.map((item, index) => (
            <li key={index}>
              <div className="titulo-e-estatus">
                <AiFillDelete
                  size={30}
                  onClick={() => deletaAntena(item)} // Passando o item como argumento
                  className="deletaAntena"
                />
                <h1>{item.name}</h1>
                {verificaStatus(item.status)}
              </div>
              <div className="ipAdress">
                <a href={item.ip} target="_black">
                  {item.ip}
                </a>
              </div>
              <div className="download-backup">
                <p>Download Backup</p>
                <a href="/caminho/do/arquivo/arquivo.zip" download>
                  <button className="buttonDown">
                    <FaFileDownload className="download" size={30} />
                  </button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Antenas;
