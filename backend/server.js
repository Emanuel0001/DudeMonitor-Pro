import "dotenv/config.js"
import app from './src/app.js';


const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Express rodando na ${PORT}`)
})