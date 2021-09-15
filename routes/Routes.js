const express = require('express');
const db = require('../database/db');
const routes = express.Router();
const users  = require('../controllers/UserController');
const login = require('../controllers/LoginController');
const pagar  = require('../controllers/PagarController');
const receber  = require('../controllers/ReceberController');


routes.get('/receber',receber.findAll);
routes.get('/receber/:id',receber.show);
routes.post('/receber',receber.store);
routes.put('/receber/:id',receber.update);
routes.delete('/receber/:id',receber.destroy);

routes.get('/pagar',pagar.findAll);
routes.get('/pagar/:id',pagar.show);
routes.post('/pagar',pagar.store);
routes.put('/pagar/:id',pagar.update);
routes.delete('/pagar/:id',pagar.destroy);


routes.get('/users',users.findAll);
routes.get('/users/:id',users.show);
routes.post('/users',users.store);
routes.put('/users/:id',users.update);
routes.delete('/users/:id',users.destroy);

routes.post('/login', login.login);


routes.use('*',(req, res)=>{
    res.sendStatus(404);
});
module.exports = routes;


