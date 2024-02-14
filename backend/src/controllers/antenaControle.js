import antena from "../models/antena.js";
import { user } from "../models/user.js";
class antenaControler {

  static async listaAntenas (req, res) {
    try {
      const listaAntenas = await antena.find({});
      res.status(200).json({ listaAntenas });
    } catch (error) {
      res.status(500).json({ message: `${error} - erro ao buscar antenas` });
    }
  }  
  static async listaAntenasPorUsuario(req, res) {
    const id = req.query.user;
    try {
      const listaAntenas = await antena.find({ 'user._id': id });
      res.status(200).json(listaAntenas);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Erro ao buscar antenas do Usuário` });
    }
  }

  static async cadastrarAntena(req, res) {
    const novaAntena = req.body;

    try {
      const usuarioEncontrado = await user.findById(novaAntena.user);
      const antenaCompleta = {
        ...novaAntena,
        user: { ...usuarioEncontrado._doc },
      };
      const antenaCadastrada = await antena.create(antenaCompleta);
      res
        .status(201)
        .json({ message: "Antena cadastrada com sucesso", antenaCadastrada });
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: "Erro ao cadastrar antena", error: error.message });
    }
  }
}

export default antenaControler;
