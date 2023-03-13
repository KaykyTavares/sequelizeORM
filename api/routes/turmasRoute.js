const { Router } = require("express")
const TurmaController = require("../controllers/TurmaController.js")

const router = Router()

router.get("/turmas", TurmaController.pegarTodasAsTurmas)
router.get("/turmas/:id", TurmaController.pegarUmaTurma)
router.post("/turmas", TurmaController.criaTurma)
router.put("/turmas/:id", TurmaController.atualizaTurma)
router.delete("/turmas/:id", TurmaController.deletaTurma)

module.exports = router