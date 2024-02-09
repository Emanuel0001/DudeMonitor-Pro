import { useEffect, useState } from "react";
import MenuNav from "../../components/MenuNav";
import Monitor from "../../components/Monitor";
import "./Dashboard.css";
import Antenas from "../../components/Antenas";
import Cadastro from "../../components/AntenaCadastroForm";
import axios from "axios";
import urls from "../../components/config/urls";
import { Navigate } from "react-router-dom";
import Buttonlogout from '../../components/logout/index'
function Dashboard() {
  const [windowOpen, setWindowOpen] = useState("monitor");
  const [isUserLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tokenOfAccess");
    const id = localStorage.getItem("idOfUser");
    if (!token && !id) {
      Navigate('/'); 
      return
    }
    const auth = urls.loginUrlAuth;
    const url = `${auth}/${id}`;

    async function verifyUserIsLogged() {
      const resultado = await axios.get(url, {
        headers: {
          'authorization': token
        }
      });
      const result = resultado;
      if(result.status !== 200){
        localStorage.clear();
      Navigate('/'); 
      }
    }
    verifyUserIsLogged();
  }, []);

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

    if (windowOpen === "cadastro") {
      return <Cadastro />;
    }
  }
  return (
    <div className="container-dashboard">
      <MenuNav onChangeWindow={handleWindowChange} />
      <div className="conteudoDashboard">{exibeNaTela()}
      </div>
    </div>
  );
}

export default Dashboard;
