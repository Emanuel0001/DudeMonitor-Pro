import antena from "../models/antena.js";
import { user } from "../models/user.js";

let antenasVerificadas = [];
console.log('antenas',antenasVerificadas)
class antenaControler {
  
  static async dadosAntenas(req, res) {
    const dados = req.body;
    console.log('Dados recebidos:', dados);
  
    if (!dados) {
      return res.status(400).json({ message: "error dados inválidos" });
    }
  
    try {
      await Promise.all(dados.map(async (antenaData) => {
        const { ip, status } = antenaData;
        await antena.findOneAndUpdate(
          { ip: ip },
          { $set: { status: status } },
          { new: true }
        );
      }));
  
      // Se todas as atualizações foram bem-sucedidas, envie a resposta de sucesso
      res.status(200).json({ message: "Dados das antenas atualizados com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar antenas: " + error });
    }
  }

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
      const listaAntenas = await antena.find({ 'user._id': id }, { user: 0 }); // Exclui o campo 'password'
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

  static async deletaAntena(req, res) {
    try {
        const idAntena = req.params.id; // Extrai o ID da antena dos parâmetros da URL
        const resultado = await antena.deleteOne({ _id: idAntena });
        console.log(resultado);
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao excluir antena' });
    }
}

}
export default antenaControler;
