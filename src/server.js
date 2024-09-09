const express = require("express");
const cors = require("cors");

const port = 3007;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, ()=> console.log ("rodando na porta" + port));

const connection = require('./db.config.js');

app.post('/usuarios/cadastrar', (request, response) => {
    let params = [
        request.body.nome,
        request.body.email,
        request.body.senha
    ]

    let query = "INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.get('/usuarios/listar', (request, response) => {
    let query = "SELECT * FROM usuarios";
    connection.query(query, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
});

app.put('/usuarios/alterar/:id', (request, response) => {
    let params = Array(
        request.params.id,
        request.body.nome,
        request.body.email,
        request.body.senha
)

    let query = "UPDATE usuarios SET nome = (?),email = (?), senha = (?)";
    connection.query(query, params, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})
app.post('/produtos/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.preco,
        request.body.quantidade
)

    let query = "INSERT INTO produtos(nome, preco, quantidade) VALUES (?, ?, ?);";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});
app.put('/produtos/alterar/:id', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.preco,
        request.body.quantidade,
        request.params.id
    )

    let query = "UPDATE produtos SET nome = (?), preco = (?), quantidade = (?) WHERE id = (?)";
    connection.query(query, params, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})

app.delete("/usuarios/deletar/:id", (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM usuarios WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})

app.get('/produtos/listar', (request, response) => {
    let query = "SELECT * FROM produtos";
    connection.query(query, (err, results) =>{
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
});

app.delete("/produtos/deletar/:id", (request, response) => {
    let params = Array(
        request.params.id
    )
    let query = "DELETE FROM produtos WHERE id = (?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {    
            response
            .status(400)
            .json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    })
})