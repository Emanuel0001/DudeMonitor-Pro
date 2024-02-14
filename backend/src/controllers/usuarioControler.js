import { user } from "../models/user.js";
import jwt from 'jsonwebtoken';

class userControler {

  static async criarNovoUsuario(req, res) {
    try {
      const { email, password, passwordConfirm } = req.body;
        const usuario = await user.findOne({ email });
        if (usuario) {
            return res.status(409).json({ message: "Este email já possui cadastro!" });
        }

        if (password !== passwordConfirm) {
            return res.status(422).json({ message: "A senha e a confirmação de senha não coincidem." });
        }

        const novoUser = await user.create({email, password});
        return res.status(201).json({ message: "Usuário criado com sucesso!", novoUser });
    } catch (error) {
        return res.status(500).json({ message: `${error} - falha cadastrar usuario` });
    }
}
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
        const usuario = await user.findById(id, "-password");

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
      const usuario = await user.findOne({ email });
      if (!usuario) {
       return res.status(404).json({ message: "Email sem cadastro"});
      }
      if (usuario) {
      const senhaConfirmada = await user.findOne({ email, password });
        if(!senhaConfirmada) {
          // Se o usuário não foi encontrado, retornar status 401 com uma mensagem indicando que as credenciais são inválidas
          return  res.status(401).json({ message: "credenciais inválidas" });
        }
        const id = usuario._id;
        const SECRETE = process.env.SECRETE;
        const token = jwt.sign({ userId: usuario.id, email: email }, SECRETE, { expiresIn: '1h' })
        
        // Se o usuário foi encontrado, retornar mensagem de sucesso e status 200
        return   res.status(200).json({ message: "usuario autenticado", token, id });
      }
    } catch (error) {
        // Se ocorrer um erro ao buscar o usuário, retornar status 500 com uma mensagem de erro
        return  res.status(500).json({ message: "erro ao autenticar", error: error.message });
    }
  }
}

export default userControler;