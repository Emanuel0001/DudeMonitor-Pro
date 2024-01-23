import "./Profile.css";
import React, { useState } from "react";
import Logo from "../../images/logo-devlinks-large.svg";
import iconLinks from "../../images/icon-links-header.svg";
import iconProfile from "../../images/icon-profile-details-header.svg";
import smartPhone from "../../images/illustration-phone-mockup.svg";
import iconAdd from "../../images/illustration-empty.svg";
import uploadImg from "../../images/icon-upload-image.svg";

function Profile() {
  const [dados, setDados] = useState([
    { plataforma: " Youtube", link: "kubj" },
    { plataforma: " Linkedin", link: "kubj" },
  ]);

  const [base64Image, setBase64Image] = useState(null);
  const [plataformas, setPlataformas] = useState([]);
  const [primeiroClique, setPrimeiroClique] = useState(false);

  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  
  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name)

  }

  const handleLastNameChange = (event) => {
    const last = event.target.value;
    setSobrenome(last)

  }

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email)
  }

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
  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64Image(base64String);
        const hidden = document.getElementById('hidden');
        const title = document.getElementById('title-hidden');
        hidden.style.display = "none"
        title.style.display = "none"
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div class="container-dashboard">
      <header>
        <nav class="top-menu">
          <div class="menu-item menu-item-left">
            <img className="logo" src={Logo}></img>
          </div>
          <div class="menu-item menu-item-center">
            <div className="container-item ">
              <a href="/dashboard">
                <img
                  src={iconLinks}
                  color="purple"
                  className="input-icon-dash"
                />
                <li>Links</li>
              </a>
            </div>
            <div className="container-item marcado">
              <img
                src={iconProfile}
                className="input-icon-dash"
                id="colored-svg"
              ></img>
              <li id="item-select">Profile details</li>
            </div>
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
              {
                <img src={base64Image} className="ImagemConvertida" />
                
              }
              <div className="data-container">
                <h1>{name + ' ' +  sobrenome }</h1>
                <h1 id="lastName">{email}</h1>
              </div>
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
          <h1>Profile Details</h1>
          <p>Add your details to create a personal touch to your profile.</p>
          <form id="formulario">
            <div className="container-upload">
              <h3>Profile picture</h3>
              <div>
                <label class="custom-file-upload">
                  <div class="preview-container">
                    {base64Image && (
                      <div>
                        <img src={base64Image} alt="Imagem Convertida" />
                      </div>
                    )}
                    <img src={uploadImg} alt="Ícone de imagem" class="icon" id="hidden"/>
                    <span className="style-p" id="title-hidden">+ Upload Image</span>
                  </div>

                  <input
                    onChange={handleFileSelect}
                    type="file"
                    id="imagem-upload"
                    name="imagem"
                    accept="image/*"
                  />
                </label>
              </div>

              <p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
            <div className="conteudo-inputs-label">
              <div className="labels">
                <label className="label2">First Name*</label>
                <label className="label2">Last Name*</label>
                <label className="label2">Email</label>
              </div>
              <div className="inputs">
                <input
                  placeholder="Ben"
                  type="text"
                  id="nome"
                  name="nome"
                  className="inputs-profile"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <input
                  placeholder="Wright"
                  type="text"
                  id="sobrenome"
                  name="sobrenome"
                  className="inputs-profile"
                  value={sobrenome}
                  onChange={handleLastNameChange}
                  required
                  
                />
                <input
                  placeholder="ben@example.com"
                  type="email"
                  id="email"
                  className="inputs-profile"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
            <div className="container-button">
              <button className="button-save" onClick={savePlataformas}>
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Profile;
