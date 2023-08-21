import connection from "./config/db.js";
import PostServico from "./models/PostServico.js";
import PostTrabalho from "./models/PostTrabalho.js";
import UserTabela from "./models/User.js";

const migrate = async() => {
    try { 
        const result = await connection.sync({force: true});
        console.log(result);
    }catch (error){ 
        console.log(error);
    }
};



migrate();