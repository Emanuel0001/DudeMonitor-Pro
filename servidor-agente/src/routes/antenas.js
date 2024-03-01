import express  from "express";
import antenaControler from '../controlers/antenaControler.js'
import verificaAntenas from '../verificaAntenas/index.js';
import axios from 'axios';

const routes = express.Router();

// routes.post('/antenas', antenaControler.buscaAntenas);
async function executaBuscaAntenasEVerifica() {
    try {
        const resultado = await antenaControler.buscaAntenas()
        const dados = await verificaAntenas(resultado);
        console.log('Dados enviados com sucesso:', dados);
        const response = await axios.post('http://localhost:3002/dadosAntenas', dados);
       console.log("status do envio",response.status)
          
       
       
    } catch (error) {
        console.error('Erro ao buscar antenas:', error);
    }
}
// Executa a função pela primeira vez
executaBuscaAntenasEVerifica();

// Define a função para ser executada a cada 5 minutos
setInterval(executaBuscaAntenasEVerifica, 5 * 60 * 1000);

export default routes;

