import "./style/Dashboard.css";
import React, { useState } from "react";
import Logo from "./images/logo-devlinks-large.svg";
import iconLinks from "./images/icon-links-header.svg";
import iconProfile from "./images/icon-profile-details-header.svg";
import smartPhone from "./images/illustration-phone-mockup.svg";
import iconAdd from "./images/illustration-empty.svg";

function Dashboard() {
  const [dados, setDados] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [primeiroClique, setPrimeiroClique] = useState(false);

  const adicionarCampo = () => {
    const div = document.getElementById("container-add");
    div.style.display = "none";
    if (!primeiroClique) {
      // Adiciona o primeiro campo no primeiro clique
      setPlataformas([{ plataforma: "", link: "" }]);
      setPrimeiroClique(true);
    } else {
      // Adiciona campos adicionais após o primeiro clique
      setPlataformas([...plataformas, { plataforma: "", link: "" }]);
    }

    if (plataformas.length >= 0) {
      console.log(plataformas.link);
    }
  };

  const handlePlataformaChange = (index, event) => {
    const novasPlataformas = [...plataformas];
    novasPlataformas[index].plataforma = event.target.value;
    setPlataformas(novasPlataformas);
  };

  const handleLinkChange = (index, event) => {
    const novasPlataformas = [...plataformas];
    novasPlataformas[index].link = event.target.value;
    setPlataformas(novasPlataformas);
  };

  const savePlataformas = () => {
    const array = plataformas;

    setDados(array);

    for (let i = 0; i < array.length; i++) {
      console.log(array[i].plataforma);
      const input = document.createElement("input");
      input.type = "text";
      input.value = array[i];

      if (array[i].plataforma === "Linkedin") {
        const a = document.createElement("input");
      }
    }
  };


  function LinksGenerator({ dados }) {
    const obterCorPorUrl = (plataforma) => {
      // Lógica para determinar a cor com base na URL
      // Este é apenas um exemplo; você pode personalizar conforme necessário
      if (plataforma.includes("Linkedin")) {
        return "#2D68FF";
      } else if (plataforma.includes("Github")) {
        return "#1A1A1A";
      } else if (plataforma.includes("Dev.to")) {
        return "#333";
      } else if (plataforma.includes("Youtube")) {
        return "#EE3939";
      }
    };
    return (
      <div>
        {dados.map((dados, index) => (
          <div key={index}>
            <a
              key={index}
              href={dados.link}
              target="__blank"
              className="a-custom-select"
              style={{ background: obterCorPorUrl(dados.plataforma) }}
            >
              {dados.plataforma}
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div class="container-dashboard">
      <header>
        <nav class="top-menu">
          <div class="menu-item menu-item-left">
            <img className="logo" src={Logo}></img>
          </div>
          <div class="menu-item menu-item-center">
            <div className="container-item marcado">
              <img src={iconLinks} color="purple" className="input-icon-dash" />
              <li className="marcado" id="item-select">Links</li>
            </div>
            <a href="/profile">
            <div className="container-item">
              <img src={iconProfile} className="input-icon-dash"></img>
              <li>Profile details</li>
            </div>
            </a>
          </div>
          <div class="menu-item menu-item-right">
            <button>Preview</button>
          </div>
        </nav>
      </header>
      <section className="container-body">
        <div className="container-left-tablet">
          <div className="container">
            
            <div className="celular-container">
              {/* Seu SVG ou conteúdo do celular aqui */}
              
                 <img className="img-smart-phone" src={smartPhone} />
                {/* Adicione o conteúdo do seu SVG aqui */}
                <div className="links-container">
              <LinksGenerator dados={dados} />
              {/* Adicione mais links conforme necessário */}
            </div>
            </div>
          </div>
        </div>
        <div className="container-rigth-form">
          <h1>Customize your links</h1>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button className="button-new-link" onClick={adicionarCampo}>
            + Add new link
          </button>
          <section className="container-add" id="container-add">
            <img className="illustration-empt" src={iconAdd}></img>
            <h1>Let’s get you started</h1>
            <p>
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </section>
          <div id="campos">
            {plataformas.map((plataforma, index) => (
              <div key={index}>
                <label className="title-campos">= Link #{index + 1}</label>
                <label className="padding-label">Plataforma</label>
                <select
                  className="custom-select"
                  value={plataforma.plataforma}
                  onChange={(event) => handlePlataformaChange(index, event)}
                >
                  <option value="">Selecione a Plataforma</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Github">Github</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Dev.to">Dev.To</option>
                </select>
                <label className="padding-label">Link</label>
                <input
                  className="link"
                  type="text"
                  placeholder="Insira o link"
                  value={plataforma.link}
                  onChange={(event) => handleLinkChange(index, event)}
                />
              </div>
            ))}
          </div>
          <div className="container-button">
            <button className="button-save" onClick={savePlataformas}>
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
