const express = require("express");
const conexao = require("./db");
const path = require("path");

const app = express();

// Permite acessar arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));

app.get("/autores", (req, res) => {

    conexao.query("SELECT * FROM autores", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.get("/categorias", (req, res) => {

    conexao.query("SELECT * FROM categorias", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.get("/livros", (req, res) => {

    conexao.query("SELECT * FROM livros", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.get("/usuarios", (req, res) => {

    conexao.query("SELECT * FROM usuarios", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.get("/emprestimos", (req, res) => {

    conexao.query("SELECT * FROM emprestimos", (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/home.html");
});