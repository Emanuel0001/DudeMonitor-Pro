import express from 'express';
import userControler from '../controllers/usuarioControler.js';

const routes = express.Router();

routes.post('/login', userControler.verificarUsuario);
routes.post('/user', userControler.criarNovoUsuario);
routes.get('/login/auth/:id', userControler.validaToken, userControler.autenticaUsuarioPorId);

export default routes;

