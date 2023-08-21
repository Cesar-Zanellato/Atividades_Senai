import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";

const PostServico = connection.define(
    'postServico',
    {
        idPostServico: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        // idUser: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'users',
        //         key: 'idUser',
        //     }
        // },
        tipoServico: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        regiao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dtDisponivel: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        periodoMatutino: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        periodoVespertino: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        periodoNoturno: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        linkWhats: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }
);

// PostServico.belongsTo(User, {
//     foreignKey: 'idUser'
// });

export default PostServico;