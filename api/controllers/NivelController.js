const database = require("../models")

class NivelController {
    static async pegarTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async pegarUmNivel(req, res) {
        try {
            const nivelId = req.params.id
            const nivel = await database.Niveis.findOne({ where: { id: Number(nivelId) } })

            return res.status(200).json(nivel)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async criaNivel(req, res) {
        try {
            const novoNivel = req.body
            const novoNivelCriada = await database.Niveis.create(novoNivel)

            return res.status(200).json(novoNivelCriada)
        } catch (error) {
            return res.status(500).json(error)
        } 
    }

    static async atualizaNivel(req, res) {
        try {
            const nivelId = req.params.id
            const novasInfos = req.body

            const nivel = await database.Niveis.findOne({ where: { id: Number(nivelId) } })
            
            await database.Niveis.update(novasInfos, { where: { id: Number(nivelId) } })
            
            const nivelAtualizado = await database.Niveis.findOne({ where: { id: Number(nivelId) } })

            return res.status(200).json({DE: nivel, PARA: nivelAtualizado})
        } catch (error) { 
            return res.status(500).json(error)
        }
    }

    static async deletaNivel(req, res) {
        try {
            const nivelId = req.params.id
            await database.Niveis.destroy({ where: { id: Number(nivelId) } })

            return res.status(200).json({mensagem: `id: ${nivelId} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = NivelController