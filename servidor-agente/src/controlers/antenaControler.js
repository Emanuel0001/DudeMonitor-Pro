import antena from '../models/antena.js';

class antenaControler {

    static async buscaAntenas (req, res) {
        const id = "65c22957bddcd05a7834f2bd";
        try {
        const listaAntenas = await antena.find({ 'user._id': id }, { password: 0 }); // Exclui o campo 'password'
           return listaAntenas
        } catch (error) {
            res.status(500).json({ message:`${error} erro ao bucar antenas`});
        }
    }
}

export default antenaControler;