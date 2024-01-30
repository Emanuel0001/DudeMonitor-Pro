import { useState } from "react";
import MenuNav from "../../Components/MenuNav";
import Monitor from "../../Components/Monitor";
import "./Dashboard.css";

function Dashboard() {
  const [windowOpen, setWindowOpen] = useState('');
  
  const handleWindowChange = (name) => {
    setWindowOpen(name);
   
  }
  return (
    <div class="container-dashboard">
    <MenuNav onChangeWindow={handleWindowChange}/>
    <div className="conteudoDashboard" >
      <Monitor />
    </div>
    </div>
  );
}

export default Dashboard;
