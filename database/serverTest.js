const express = require('express');
const routes = require('./routes/routes');
const db = require('./database/db');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
db.sync().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});
app.listen(3030, () => console.log("Servidor iniciado na porta 3030"));