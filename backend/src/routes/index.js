import express from "express";
import antenas from "./AntenaRoutes.js";
import login from "./userRoute.js"
import cors from 'cors';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send('servidor express'))
    app.use(express.json(), cors(), antenas, login); // middleware -- pode modificar um objeto
}

export default routes;
