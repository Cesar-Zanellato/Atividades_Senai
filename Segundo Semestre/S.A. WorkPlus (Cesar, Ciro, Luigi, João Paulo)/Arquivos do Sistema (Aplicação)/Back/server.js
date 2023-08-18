import express from "express";
import router from "./routes/routes.js"
import connection from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

const server = express();
const port = 3000;

server.listen(port,console.log(`Servidor rodando na Porta ${port}...`))

try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
} catch (error){
    console.error("Unable to connect to the database:", error);
}

server.use(cors());
server.use(bodyParser.urlencoded( { extended: true} ));
server.use(bodyParser.json());
server.use(router);