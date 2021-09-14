const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");


// Associa as rotas ao seu método do Controller
//routes.get('/login', LoginController.login);
// associa as rotas ao seu método do ClientController
router.use('/users', userRoutes);


//404 pagina não encontrada
router.use((req, res)=>{
    res.status(404);
});


module.exports = router;


