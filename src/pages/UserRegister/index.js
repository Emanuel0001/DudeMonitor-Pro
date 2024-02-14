import RegisterForm from "../../components/RegisterForm";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
    const navigate = useNavigate();


    const irParaLogin = () => {
        navigate('/');
    }
  return (
    <div className="cadastro-container">
      <div className="conteudo">
        <p>Welcome the DudeMonitor Pro</p>
        <h2>Create Your Account</h2>
      </div>
      <RegisterForm />
      <div className="section-voltar">
          <p>Já possui conta? </p> <a onClick={irParaLogin} >Sign In</a>
        </div>

    </div>
  );
};

export default UserRegister;
