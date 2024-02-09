import antena from "../models/antena.js";

class antenaControler {
    static async listaAntenas(req, res) {
        // Salvar busca antenas no banco de dados
        const listaAntenas = await antena.find({});
        res.status(200).json(listaAntenas);
    }

    static async cadastrarAntena (req, res) {
      const { name, ip , status} = req.body;
        try {
            const novaAntena = new antena({
              name: name,
              ip: ip,
              status: status
            });
            // Salvar a nova antena no banco de dados
            await novaAntena.save();
            res.status(201).json({ message: "Antena cadastrada com sucesso"});
          } catch (error) {
            res.status(400).json({ mensagem: 'Erro ao cadastrar antena', error: error.message });
          }
    }
}

export default antenaControler;