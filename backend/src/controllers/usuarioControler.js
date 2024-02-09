import User from "../models/user.js";
import jwt from 'jsonwebtoken';

class userControler {

  static async validaToken (req, res, next) {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(401).json({ message: "Acesso negado" });
    }
    try {
        const SECRETE = process.env.SECRETE;
         jwt.verify(token, SECRETE);
        next();
    } catch (error){
        return res.status(400).json({ message: "Token inválido", error });
    }
  }
  static async autenticaUsuarioPorId (req, res) {
    const id = req.params.id;

    try {
        // Recupera informações do usuário por ID
        const usuario = await User.findById(id, "-password");

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se chegou até aqui, o usuário foi encontrado e as informações podem ser retornadas
        res.status(200).json({ usuario, message: "usuario autenticado" });
    } catch (error) {
        console.error("Erro ao autenticar usuário:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
  
  }
  static async verificarUsuario(req, res) {
    const { email, password } = req.body;
    
    try {
      // Buscar o usuário pelo email e senha no banco de dados
      
      const usuario = await User.findOne({ email, password });
      if (usuario) {
        const id = usuario._id;
        const SECRETE = process.env.SECRETE;
        const token = jwt.sign({ userId: usuario.id, email: email }, SECRETE, { expiresIn: '1h' })
  
        // Se o usuário foi encontrado, retornar mensagem de sucesso e status 200
        res.status(200).json({ message: "usuario autenticado", token, id });
      } else {
        // Se o usuário não foi encontrado, retornar status 404 com uma mensagem indicando que as credenciais são inválidas
        res.status(404).json({ message: "credenciais inválidas" });
      }
    } catch (error) {
        // Se ocorrer um erro ao buscar o usuário, retornar status 500 com uma mensagem de erro
        res.status(500).json({ message: "erro ao autenticar", error: error.message });
    }
  }
}

export default userControler;