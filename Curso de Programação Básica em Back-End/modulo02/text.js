// var express = require("express");
// const app = express();
// app.use(express.json());

// app.get("/", function (req, res) {
//     console.log("Requisição GET recebida para a rota URI /");
//     res.send("Seja bem-vindo à rota principal (/)!");
// });

// app.post("/adicionar", function (req, res) {
//     console.log("Requisição POST recebida para a rota URI /adicionar");
//     res.send("Seja bem-vindo à rota de adicionar (/adicionar)!");
// });

// app.put("/atualizar", function (req, res) {
//     console.log("Requisição PUT recebida para a rota URI /atualizar");
//     res.send("Seja bem-vindo à rota de atualizar (/atualizar)!");
// });

// app.delete("/deletar", function (req, res) {
//     console.log("Requisição DELETE recebida para a rota URI /deletar");
//     res.send("Seja bem-vindo à rota de deletar (/deletar)!");
// });

// app.get("/listar", function (req, res) {
//     console.log("Requisição GET recebida para a rota URI /listar");
//     res.send("Seja bem-vindo à rota de listagem (/listar)!");
// });

// //A porta é uma variável de ambiente
// const porta = process.env.PORT || 8080;

// app.listen(porta, () =>
//     console.log("Servidor inicializado na porta: " + porta)
// );