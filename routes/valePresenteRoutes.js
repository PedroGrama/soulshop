const {Router}=require ('express')

const valePresenteController=require('../controllers/valePresenteController')

const router= Router()
router.get("/valepresente", valePresenteController.paginaValePresente);

router.get("/valepresente/novo", valePresenteController.paginaAdicionarValePresente);
router.get("/valepresente/editar/:id", valePresenteController.paginaEditValePresente);
router.post("/valepresente/atualizar", valePresenteController.editValePresente);
router.post("/valepresente/enviar", valePresenteController.addValePresente);
router.post("/valepresente/deletar", valePresenteController.deleteValePresente);


module.exports = router;