import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";

const PostTrabalho = connection.define(
    'postTrabalho',
    {
        idPostTrabalho: {
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
        tipoTrabalho: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dtInicio: {
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
        dtCriacao: {
            type: Sequelize.DATE,
            allowNull: false
        },
    }
);

// PostTrabalho.belongsTo(User, {
//     foreignKey: 'idUser'
// });

export default PostTrabalho;