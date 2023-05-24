const express = require('express');
const userRouter = require('./user.routes');
const router = express.Router();

// colocar las rutas 
//rutas publicas
router.use('/users',userRouter)

//rutas protegidas


module.exports = router;