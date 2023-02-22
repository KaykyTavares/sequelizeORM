const { Router } = require("express")
const PessoasController = require("../controllers/PessoaController.js")

const router = Router()

router.get("/pessoas", PessoasController.pegarTodasAsPessoas)
router.get("/pessoas/:id", PessoasController.pegarUmaPessoa)
router.post("/pessoas", PessoasController.criaPessoa)
router.put("/pessoas/:id", PessoasController.atualizaPessoa)
router.delete("/pessoas/:id", PessoasController.deletaPessoa)

module.exports = router