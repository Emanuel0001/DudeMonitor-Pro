import express  from "express";
import routes from "./routes/index.js";
import connectDatabase from "./config/dbConnect.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
    console.error("erro de conexao", error)
  });
  
  conexao.once("open", () => {
    console.log('conexao com banco feita com sucesso!')
  });
const app = express();
routes(app)

export default app;