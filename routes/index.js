const { Router } = require("express")
const produtosRoutes = require("./produtosRoutes")
const cupomRoutes = require("./cupomRoutes")
const lojasRoutes = require('./lojasRoutes');
const valepresenteRouter = require('./valePresenteRoutes');
const router = Router();


router.get("/", (req, res )=>{
    res.render("home")
});

router.use(produtosRoutes);

router.use(cupomRoutes);

router.use(lojasRoutes);

router.use(valepresenteRouter);

router.use((req, res, next)=>{
    res.render("404")
});


module.exports = router;