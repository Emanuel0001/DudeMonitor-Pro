import "./cadAntenasForm.css";
import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import InputName from "../Form/InputName";
import InputIpAdress from "../Form/InputIpAdress";
import InputFile from "../Form/InputFile";
import Button from '../Button'

const AntenaCadastroForm = () => {
  const [name, setSsid] = useState("");
  const [ip, setIpAdress] = useState("");
  const [Backup, setBackup] = useState("");

  const [message, setMessage] = useState("");

  const handleSsidChange = (newSSID) => {
    setSsid(newSSID);
  };

  const handleIPChange = (newIP) => {
    setIpAdress(newIP);
  };

  const handleFileChange = (newFile) => {
    setBackup(newFile);
  }
  const  formSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3002/antenas'
   const antena = {
    name: name,
    ip: ip,
    status: "offline"
   }

    axios.post (url,antena, {
      headers: {
        "Content-Type": "application/json",
      },})
      .then((response) => {
        const status = response.status
        if(status === 201) {
          toast.success("Cadastrado com sucesso!");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container-antenasForm">
         <ToastContainer />

      <div className="conteudo-titulado">
        <h1>Cadastro Antenas</h1>
        <p>Dashboard</p>
      </div>
      <section className="container-formulario"> 
        <form onSubmit={formSubmit}className="conteudo-form">
          <InputName onDataChange={handleSsidChange} />
          <InputIpAdress onDataChange={handleIPChange}/>
          <InputFile onDataChange={handleFileChange}/>
         
         <div className="div-button">
            <Button value="Salvar Antena"/>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AntenaCadastroForm;
