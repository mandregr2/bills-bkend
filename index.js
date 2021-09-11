const express = require("express");
//const requireDir = require("require-dir");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
app.use(express.json());
app.use(cors());
const con = mysql.createConnection({
    host: 'localhost',
    user: 'ropers',
    password: 'ropers',
});
con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados');
        return;
    }
    console.log('Conexão estabelecida');
});




