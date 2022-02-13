const {Router} = require("express");
const LojasController = require("../controllers/LojasController");
const router = Router();

router.get("/lojas", LojasController.paginaLojas);
router.get("/lojas/novo", LojasController.paginaAdicionarLojas);
router.get("/lojas/editar/:id",LojasController.paginaEditLojas);
router.post("/lojas/atualizar",LojasController.editLojas);
router.post("/lojas/enviar", LojasController.addLojas);
router.post("/lojas/deletar", LojasController.deleteLojas);

module.exports = router;