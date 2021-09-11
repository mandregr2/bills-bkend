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





//Define uma rota
app.get("/authors", (req, res) => {
    return res.send("Rota para retornar os autores");
    });
    // Inicia o servidor na porta '3000'
    app.listen(3000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3000");
    });