require('dotenv').config();
const { Sequelize } = require("sequelize");

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, DB_TYPE } = process.env;

var  sequelizeMysql = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST,
    dialect: DB_TYPE,
    port: MYSQL_PORT
  }
);

module.exports = sequelizeMysql;