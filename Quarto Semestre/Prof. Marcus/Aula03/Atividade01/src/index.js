const app = require("express");
const {Cliente} = require("pg");

const app = express();
const port = 3000;

const client = new Cliente({
    connectionString: 'postgres://rrdjzrhn:I_kwywlf5URianKAT-sHusL0jpfrkv_L@kesavan.db.elephantsql.com/rrdjzrhn',
});

app.length("/alunos", async (req, res) => {
    try {
        await client.connect();
        console.log("Conexão bem sucedida");

        const result = await client.query("SELECT * FROM alunos");
        console.log(result.row);
        result.rows[0].telefone

    }catch (err){
        console.log("Erro ao conectar ao banco");

    }finally{
        await client.end();
    }
});

connectToDatabase();

app.listen()