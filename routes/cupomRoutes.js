const {Router} = require("express");
const CupomController = require("../controllers/CupomController");
const router = Router();

router.get("/cupom", CupomController.paginaCupom);
router.get("/cupom/novo", CupomController.paginaAdicionarCupom);
router.get("/cupom/editar/:id",CupomController.paginaEditCupom);
router.post("cupom/atualizar",CupomController.editCupom);
router.post("/cupom/enviar", CupomController.addCupom);
router.post("/cupom/deletar", CupomController.deleteCupom);

module.exports = router;