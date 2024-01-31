import { useState } from "react";
import MenuNav from "../../Components/MenuNav";
import Monitor from "../../Components/Monitor";
import "./Dashboard.css";
import Antenas from "../../Components/Antenas";

function Dashboard() {
  const [windowOpen, setWindowOpen] = useState("monitor");
  
  const handleWindowChange = (name) => {
    setWindowOpen(name);
  };

  function exibeNaTela() {
    if (windowOpen === "monitor") {
      return <Monitor />;
    }

    if (windowOpen === "antenas") {
      return <Antenas />;
    }
  }

  return (
    <div className="container-dashboard">
      <MenuNav onChangeWindow={handleWindowChange} />
      <div className="conteudoDashboard">{exibeNaTela()}</div>
    </div>
  );
}

export default Dashboard;
