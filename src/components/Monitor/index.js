import { useEffect, useState } from "react";
import "./Monitor.css";
import ColumnChart from "../PorcentageChart";
import axios from "axios";
import urls from "../config/urls";

const Monitor = () => {
  const [totalAntenas, setTotalAntenas] = useState(0);
  const [antenasOnline, setTotalOnline] = useState(0);
  const [antenasOffline, setTotalOffline] = useState(0);
  const url = urls.getAntenas;
  const data = [
    {
      name: "Total",
      value: (totalAntenas / totalAntenas) * 100,
      color: "#82ca9d",
      fill: "#0000ff",
    },
    {
      name: "Online",
      value: (antenasOnline / totalAntenas) * 100,
      color: "#82ca9d",
      fill: "#adff2f",
    },
    {
      name: "Offline",
      value: (antenasOffline / totalAntenas) * 100,
      color: "#ff7300",
      fill: "#ff0000",
    },
  ];
  useEffect(() => {
    const id = localStorage.getItem("idOfUser");

    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            user: id
          }
        });
        const dados = response.data;
        const status = response.status;
        
        if (status === 200) {
          const lista = dados;
          const total = lista.length;
          let totalOnline = 0;
          let totalOffline = 0;
  
          for (let i = 0; i < lista.length; i++) {
            if (lista[i].status === "online") {
              totalOnline++;
            }
            if (lista[i].status === "offline") {
              totalOffline++;
            }
          }
  
          setTotalAntenas(total);
          setTotalOnline(totalOnline);
          setTotalOffline(totalOffline);
        } else {
          console.error("Erro ao buscar dados da API. Status:", status);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
  
    fetchData();
  }, [url]); // Certifique-se de incluir 'url' no array de dependências se 

  return (
    <main className="content-main">
      <div className="conteudo-titulado">
        <h1>Monitoramento</h1>
        <p>Dashboard</p>
      </div>
      <section className="quadros-monitorados">
        <div className="quadro total">
          <h2>- Total -</h2>
          <h3>{totalAntenas}</h3>
        </div>
        <div className="quadro online">
          <h2>- Online -</h2>
          <h3>{antenasOnline}</h3>
        </div>
        <div className="quadro offline">
          <h2>- Offline -</h2>
          <h3>{antenasOffline}</h3>
        </div>
      </section>
      <section className="container-grafico">
        <div>
          <ColumnChart data={data} />
        </div>
      </section>
    </main>
  );
};
export default Monitor;
