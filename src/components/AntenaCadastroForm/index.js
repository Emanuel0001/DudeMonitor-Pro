import "./cadAntenasForm.css";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import urls from "../config/urls";
import Button from "../Button";
import CustomInput from "../Form/input";

const AntenaCadastroForm = () => {
  const [name, setSsid] = useState("");
  const [ip, setIpAdress] = useState("");
  const [Backup, setBackup] = useState("");

  const [isNameValid, setIsNameValid] = useState(false);
  const [isIpValid, setIsIpValid] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setSsid(newName);
    const div = document.getElementById("name");
    if (newName.length >= 4) {
      setIsNameValid(true);
      div.style.cssText = "color: #633cff; border: solid 1px #633cff;";
    } else {
    setIsNameValid(false);
      div.style.cssText = "color: red; border: solid 1px red;";
    }
  };

  const handleIpChange = (e) => {
    const newIp = e.target.value;
    setIpAdress(newIp);
    const div = document.getElementById("ip");
    if (newIp.length > 5) {
      setIsIpValid(true);
      div.style.cssText = "color: #633cff; border: solid 1px #633cff;";
    } else {
      setIsIpValid(false);
      div.style.cssText = "color: red; border: solid 1px red;";
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const id = localStorage.getItem("idOfUser");

    const url = urls.postAntenasCadastro;
    const antena = {
      name: name,
      ip: ip,
      status: "online",
      user: id,
    };

    axios
      .post(url, antena, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const status = response.status;
        if (status === 201) {
          toast.success("Cadastrado com sucesso!");
        }
      })
      .catch((error) => console.log(error));
  };
  const validaForm = () => {
    if (isNameValid && isIpValid) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="container-antenasForm">
      <ToastContainer />
      <div className="conteudo-titulado">
        <h1>Cadastro Antenas</h1>
        <p>Dashboard</p>
      </div>
      <section className="container-formulario">
        <form onSubmit={formSubmit} className="conteudo-form">
          <CustomInput
            label="SSID"
            type="text"
            placeholder="Informe o SSID da antena"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          <CustomInput
            label="Ip Adress"
            type="text"
            id="ip"
            placeholder="Exemple...10.0.0.1"
            value={ip}
            onChange={handleIpChange}
          />

          <CustomInput
            id="selecao-arquivo"
            label="Backup de Configuração"
            type="file"
            placeholder="Selecionar um arquivo"
          />
          <label id="file" htmlFor="selecao-arquivo">
            Selecionar um arquivo &#187;
          </label>

          <div className="div-button">
            <Button isDisabled={validaForm()} value="Salvar Antena" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AntenaCadastroForm;
