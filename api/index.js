const express = require('express');
const cors = require('cors')

const app = express();
const port = 3001;

app.use(cors()); // Adiciona o middleware cors
app.use(express.json()); // Adicione esta linha para analisar automaticamente o corpo JSON da solicitação

// ATENÇÃO: o cliente NÃO poderá se conectar!


app.get('/', (req, res) => {
    res.send("servidor rodando")
}) 

app.get('/listaAntenas', (req, res)=> {
    const lista = [
        {
          name: "Torre 1",
          download: "aquivo",
          ip: '192.168.0.1',
          status: "online",
        },
        {
          name: "Torre 2",
          download: "aquivo",
          ip: '192.168.0.2',
          status: "online",
        },
        {
          name: "Torre 2",
          download: "aquivo",
          ip: '192.168.0.3',
          status: "offline",
        },
    
        {
          name: "Torre 3",
          download: "aquivo",
          ip: '192.168.0.4',
          status: "online",
        },
        {
          name: "Torre 5",
          download: "aquivo",
          ip: '192.168.0.5',
          status: "online",
        }
        ,
        {
          name: "Torre 6",
          download: "aquivo",
          ip: '192.168.0.5',
          status: "online",
        }
      ];

    const total = lista.length;
    let totalOnline = 0;
    let totalOffline = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].status === "online") {
          totalOnline++;
        }
        if(lista[i].status === "offline") {
          totalOffline++
        }
      }     
    res.json({lista, total, totalOnline, totalOffline})
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === "hitallosoares1@gmail.com" && password === "A12345678@&") {
        res.status(200).json({ message: 'Logado!' });
    } else {
        return res.status(401).json({ error: "Usuário ou senha inválidos" });
    }
});

app.listen(port,()=> {
    console.log(`rodando na porta ${port}`)
});
