const { Router } = require("express")
const NivelController = require("../controllers/NivelController.js")

const router = Router()

router.get("/niveis", NivelController.pegarTodosOsNiveis)
router.get("/niveis/:id", NivelController.pegarUmNivel)
router.post("/niveis", NivelController.criaNivel)
router.put("/niveis/:id", NivelController.atualizaNivel)
router.delete("/niveis/:id", NivelController.deletaNivel)

module.exports = router