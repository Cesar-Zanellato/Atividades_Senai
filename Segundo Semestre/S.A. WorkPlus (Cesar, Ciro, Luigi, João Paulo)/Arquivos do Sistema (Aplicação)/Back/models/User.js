import Sequelize from "sequelize";
import connection from "../config/db.js";

const User = connection.define(
    'user',
    {
        idUser: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        cpf: {
            type: Sequelize.STRING(11),
            unique: true,
            allowNull: false,
        },
        dtNascimento: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    }

);

export default User;