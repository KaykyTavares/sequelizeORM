const database = require("../models")

class PessoasController {
    static async pegarTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async pegarUmaPessoa(req, res) {
        try {
            const pessoaId = req.params.id
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(pessoaId) } })

            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async criaPessoa(req, res) {
        try {
            const novaPessoa = req.body
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)

            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error)
        } 
    }

    static async atualizaPessoa(req, res) {
        try {
            const pessoaId = req.params.id
            const novasInfos = req.body

            const pessoa = await database.Pessoas.findOne({ where: { id: Number(pessoaId) } })
            
            await database.Pessoas.update(novasInfos, { where: { id: Number(pessoaId) } })
            
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(pessoaId) } })

            return res.status(200).json({DE: pessoa, PARA: pessoaAtualizada})
        } catch (error) { 
            return res.status(500).json(error)
        }
    }

    static async deletaPessoa(req, res) {
        try {
            const pessoaId = req.params.id
            await database.Pessoas.destroy({ where: { id: Number(pessoaId) } })

            return res.status(200).json({mensagem: `id: ${pessoaId} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = PessoasController