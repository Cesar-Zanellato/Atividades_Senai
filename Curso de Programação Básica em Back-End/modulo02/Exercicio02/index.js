const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

const livros = [
    { titulo: "Livro A", id: 1 },
    { titulo: "Livro B", id: 2 },
    { titulo: "Livro C", id: 3 },
    { titulo: "Livro D", id: 4 },
];

// Rota padrão para verificação da aplicação. Acesso: GET https://localhost:4000/
app.get("/", (req, res) => {
    res.send("Página inicial da Aplicação.")
});

// Rota para retornar todos os livros. Acesso: GET https://localhost:4000/livros/
app.get("/livros", (req, res) => {
    res.send(livros);
});

// Rota para retornar um livro específico. Acesso: GET https://localhost:4000/livros/:id
app.get("/livros/:id", (req, res) => {
    
    const livro = livros.find(
        (livro) => livro.id === parseInt(erq.params.id, 10)
    );

    if(!livro){
        res
            .status(404)
            .send("Não foi possível encontrar o livro solicitado.");
    };

    res.send(livro);
});

// Rota para cadastrar um livro. Acesso: POST https://localhost:4000/livros/
app.post("/livros", (req, res) => {
    const { error } = validarLivro(req.body);

    if(error){
        res
            .status(400)
            .send(error.details[0].message);
        return;
    }

    const livro = {
        id: livros.length + 1,
        titulo: req.body.titulo
    };

    livros.push(livro);
    res.send(livro);
});

// Rota para atualizar um livro específico. Acesso: PUT https://localhost:4000/livros/:id
app.put("/livros/:id", (req, res) => {
    const livro = livros.find(
        (livro) => livro.id === parseInt(req.params.id, 10)
    );

    if(!livro){
        res
            .status(404)
            .send("Não foi possível encontrar o livro solicitado");
    };

    const { error } = validarLivro(req.body);
    if(error){
        res
            .status(400)
            .send(error.details[0].message);
        return
    };

    livro.titulo = req.body.titulo;
    res.send(livro);
});

// Rota para deletar um livro específico. Acesso: DELETE https://localhost:4000/livros/:id
app.delete("livros/:id", (req, res) => {
    const livro = livros.find(
        (livro) => livro.id === parseInt(req.params.id, 10)
    );

    if(!livro){
        res
            .status(404)
            .send("Não foi possível encontrar o livro solicitado");
    };

    const index = livros.indexOf(livro);
    livros.splice(index, 1);
    res.send(livro);
});

// Função para validar o campo titulo
function validarLivro(livro){
    const schema = Joi.object({
        titulo: Joi
            .string()
            .min(3)
            .empty()
            .required()
            .messages({
                "string.min": "O campo titulo deve ter, no minimo, {#limit} caracteres.",
                "string.empty": "O campo titulo não pode estar vazio.",
                "any.required": "O campo titulo é obrigatório"
            })
    });
    const resultado = schema.validate(livro);
    return resultado;
};

const porta = process.env.PORT || 4000;
app.listen(porta, () => {
    console.log("Servidor inicializado na porta: " + porta);
});