const database = require("../models")

class PessoasController {
    static async pegarTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = PessoasController