const { Router } = require("express")
const PessoaController = require("../controllers/PessoaController.js")

const router = Router()

router.get("/pessoas", PessoaController.pegarTodasAsPessoas)
router.get("/pessoas/:id", PessoaController.pegarUmaPessoa)
router.post("/pessoas", PessoaController.criaPessoa)
router.put("/pessoas/:id", PessoaController.atualizaPessoa)
router.delete("/pessoas/:id", PessoaController.deletaPessoa)

module.exports = router