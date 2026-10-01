const express = require("express");
const conexao = require("./db");
const path = require("path");

const app = express();

// Permite acessar arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));

app.get("/jogadores", (req, res) => {

    conexao.query("SELECT * FROM jogadores", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.get("/jogos", (req, res) => {

    conexao.query("SELECT * FROM jogos", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.get("/partidas", (req, res) => {

    conexao.query("SELECT * FROM partidas", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/home.html");
});