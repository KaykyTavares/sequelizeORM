const database = require("../models")

class PessoaController {
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

    static async pegarUmaMatricula(req, res) {
        try {
            const {estudanteId, matriculaId} = req.params
            const umaMatricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })

            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async criaMatricula(req, res) {
        try {
            const { estudanteId } = req.params
            const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)

            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error)
        } 
    }

    static async atualizaMatricula(req, res) {
        try {
            const {estudanteId, matriculaId} = req.params
            const novasInfos = req.body

            const matricula = await database.Matriculas.findOne({ where: { id: Number(matriculaId)} })
            
            await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId)} })
            
            const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId)} })

            return res.status(200).json({DE: matricula, PARA: matriculaAtualizada})
        } catch (error) { 
            return res.status(500).json(error)
        }
    }

    static async deletaMatricula(req, res) {
        try {
            const {estudanteId, matriculaId} = req.params
            await database.Matriculas.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })

            return res.status(200).json({mensagem: `id: ${matriculaId} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = PessoaController