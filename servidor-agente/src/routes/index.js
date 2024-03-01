import cors from 'cors';
import express from 'express';
import antena from './antenas.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({ message: "servidor rodando"});
  });
  app.use( express.json(), cors(), antena);
}

export default routes;
