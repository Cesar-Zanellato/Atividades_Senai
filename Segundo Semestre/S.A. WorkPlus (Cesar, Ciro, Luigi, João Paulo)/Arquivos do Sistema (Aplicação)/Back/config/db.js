import Sequelize from "sequelize"
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env"})

const connection = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: 3306,
    dialect: 'mysql',
  }
);

export default connection;