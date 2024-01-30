import { useState } from "react";
import "./Monitor.css";
import PercentageChart from "../PorcentageChart";
import ColumnChart from "../PorcentageChart";

const Monitor = () => {
  const [totalAntenas, setTotalAntenas] = useState(100);
  const [antenasOnline, setTotalOnline] = useState(80);
  const [antenasOffline, setTotalOffline] = useState(20);

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
        <div className="quadro online" >
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
