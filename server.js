const express = require('express');
const routes = require('./routes/routes.js')
const db = require("./database/db");
const userController = require('./controllers/UserController');
const app = express();

//const db = require('./database/db');
//const sequelize = new Sequelize("mysql::memory:");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.sync().then(() => {
console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});
//app.use('/api', require("./routes/Routes"));
//const jwt = require('jsonwebtoken');
//const requireDir = require("require-dir");
//const cors = require("cors");
//app.use(cors());
//const bodyParser = require('body-parser');

// Inicia o servidor na porta '3030'

/* db.sync().then(() => {
console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});
 */

userController.get('/')

app.listen(3030, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3030");
});


