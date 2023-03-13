const database = require("../models")

class TurmaController {
    static async pegarTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll()
            
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async pegarUmaTurma(req, res) {
        try {
            const turmaId = req.params.id
            const turma = await database.Turmas.findOne({ where: { id: Number(turmaId) } })

            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async criaTurma(req, res) {
        try {
            const novaTurma = req.body
            const novaTurmaCriada = await database.Turmas.create(novaTurma)

            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
            return res.status(500).json(error)
        } 
    }

    static async atualizaTurma(req, res) {
        try {
            const turmaId = req.params.id
            const novasInfos = req.body

            const turma = await database.Turmas.findOne({ where: { id: Number(turmaId) } })
            
            await database.Turmas.update(novasInfos, { where: { id: Number(turmaId) } })
            
            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(turmaId) } })

            return res.status(200).json({DE: turma, PARA: turmaAtualizada})
        } catch (error) { 
            return res.status(500).json(error)
        }
    }

    static async deletaTurma(req, res) {
        try {
            const turmaId = req.params.id
            await database.Turmas.destroy({ where: { id: Number(turmaId) } })

            return res.status(200).json({mensagem: `id: ${turmaId} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = TurmaController