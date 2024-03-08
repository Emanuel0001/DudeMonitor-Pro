import express from 'express';
import antenaControler from '../controllers/antenaControle.js';

const routes = express.Router();
routes.get('/antenas',  antenaControler.listaAntenas);
routes.get('/antenas/busca',  antenaControler.listaAntenasPorUsuario);
routes.post('/antenas', antenaControler.cadastrarAntena);
routes.post('/dadosAntenas', antenaControler.dadosAntenas);
routes.delete("/antenas/:id", antenaControler.deletaAntena);
export default routes;

