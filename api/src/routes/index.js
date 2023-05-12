const { Router } = require("express");
const dogsRouter = require("../routes/dogsR/dogsRouter");
const temperRouter = require("./temperR/temperRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRouter);

router.use("/temperaments", temperRouter);

module.exports = router;
