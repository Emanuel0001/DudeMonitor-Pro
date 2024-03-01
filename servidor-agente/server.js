import "dotenv/config.js";
import app from "./src/app.js";

const PORT = 3005;

app.listen(PORT, () => {
    console.log(`servidor agente rodando na porta ${PORT}`);
  });
  