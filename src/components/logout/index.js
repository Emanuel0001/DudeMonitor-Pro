import "./logout.css";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Buttonlogout = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('clicou');
    localStorage.clear();
      navigate('/');
  }  
  return (
    <div className="container-logout">
      <button className="button-logout" >
        <span>log out</span>
        <RiLogoutBoxFill className="logout" onClick={handleLogout} size={32} />
      </button>
    </div>
  );
};

export default Buttonlogout;
