import { useEffect, useState } from "react";
import "./Antenas.css";
import { FaFileDownload } from "react-icons/fa";
import axios from "axios";
import urls from "../config/urls";

const Antenas = () => {
  const [antenas, setAntenas] = useState([]);
  const url = urls.getAntenas;

  useEffect(() => {
    const id = localStorage.getItem("idOfUser");

    const buscarAntenas = () => {
      axios
        .get(url, {
          params: {
            user: id
          }
        })
        .then((response) => {
          const data = response.data;
          setAntenas(data);
        })
        .catch((error) => console.log(error));
    };
    buscarAntenas();
  }, []);
  
  const verificaStatus = (status) => {
    if (status === "online") {
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
