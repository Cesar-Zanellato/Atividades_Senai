let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
const cors = require("cors");
let Usuario = require("./modelo/usuario.js");
const usuario = require("./modelo/usuario.js");

let app = express();
let porta = 4000;
let router = express.Router();

// Configuração da conexão com o MongoDB no serviço cloud MongoDB Atlas
const uri = "mongodb+srv://Cesar:Cesar123.@cluster0.jidrbfh.mongodb.net/?retryWrites=true&w=majority";

// Configuração do pacote cors para autorizar requisições de todas as origens
app.use(cors());

// Configuração da aplicação para utilizar o pacote body-parser para retornar os dados da requisição.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Validação da configuração da conexão com MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("A conexão com o MongoDB foi realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

// Definição do middleware para acessar as solicitações enviadas à API
router.use(function (req, res, next) {
  console.log("Acesso à primeira camada do middleware...");
  // Definição do site de origem que tem permissão de realizar a conexão com a API
  // O "*" indicado que qualquer site pode fazer a conexão
  res.header("Acess-Control-Allow-Origin", "*");
  // Definição dos métodos permitidos pela conexão durante o acesso à API
  res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  app.use(cors());
  next();
});

// Rota Inicial GET 
app.get("/", (req, res) => {
  res.send("Página inicial da Aplicação.");
});

// Rota padrão para verificação da aplicação. Acesso: GET https://localhost:4000/
router.get("/", (req, res) => {
  res.json({
    message: "Essa API foi desenvolvida em Node.js"
  });
});


router
  .route("/usuario")

// Método POST: cadastrar um usuário. Acesso: POST https://localhost:4000/usuario
  .post((req, res) => {
    let usuario = new Usuario();
    
    usuario.nome = req.body.nome;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;

    usuario.save(function (error) {
      if(error){ 
        res.send(error);
      };
        res.json({ message: "Usuário cadastrado com sucesso!" });
    });
  })

// Método GET: retornar todos os usuários cadastrados. Acesso: GET https://localhost:4000/usuario
  .get((req, res) => {
    Usuario.find(function(error, usuario) {
      if(error){
        res.send(error);
      }
      res.json(usuario);
    });
  });

// Rota para usuario específico.
router
  .route("/usuario/:usuario_id")

// Método GET: retornar as informações de um usuário específico. Acesso: GET https://localhost:4000/usuario/:usuario_id
  .get((req, res) => {
    Usuario.findById(req.params.usuario_id, function (error, usuario){
      if(error){
        res.send(error);
      };
      res.json(usuario);
    });
  })

// Método PUT: atualizar as informações de um usuário específico. Acesso: PUT https://localhost:4000/usuario/usuario_id
  .put((req, res) => {
    Usuario.findById(req.params.usuario_id, function (error, usuario) {
      if(error){
        res.send(error);
      };
      
      usuario.nome = req.body.nome;
      usuario.login = req.body.login;
      usuario.senha = req.body.senha;

      usuario.save(function (error) {
        if(error){
          res.send(error);
        };
        res.json({ message: "Usuário atualizado com sucesso!" });
      });
    });
  })

// Método DELETE: deletar um usuário específico. Acesso: DELETE https://localhost:4000/usuario/usuario_id
  .delete((req, res) => {
    Usuario.deleteOne(
      {
        _id: req.params.usuario_id
      },
      function (error) {
        if(error){
          res.send(error);
        };
        res.json({ message: "Usuário excluído com sucesso!"});
      }
    );
  });

//Inicialização do servidor da aplicação
app.listen(porta);
console.log("Iniciando a aplicação na porta " + porta);
