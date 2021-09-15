const express = require('express');
const db = require("./database/db");
const requireDir = require('require-dir');
const routes = require('./routes/routes.js')
const cors = require('cors');


// Cria uma aplicação Express
const app = express();

// Permite enviar dados para a API no formato JSON
app.use(express.json());

// Permite o uso do CORS (acesso a domínios externos da nossa API)
app.use(cors());

app.use(routes);

db.sync().then(() => {
console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});
//app.use('/api', require("./routes/Routes"));
//const jwt = require('jsonwebtoken');
//const bodyParser = require('body-parser');

// Inicia o servidor na porta '3030'

/* db.sync().then(() => {
console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});
 */



app.listen(3030, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3030");
});


