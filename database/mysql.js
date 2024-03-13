const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, DB_TYPE } = process.env;
const sequelizeMysql = require('../database/sequelize_mysql');

async function connectToMySQL() {
  try {
    await sequelizeMysql.authenticate().then(() => {
        console.log('Successfully connected to Mysql database!');
      })
      .catch(async (error) => {
        console.error('Error attempting database connection:', error);
        const connection = await mysql.createConnection({ host: MYSQL_HOST, port: MYSQL_PORT, user: MYSQL_USER, password: MYSQL_PASSWORD });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\`;`);

        await sequelizeMysql.close();
        process.exit(1);
      });

    return sequelizeMysql;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1);
  }
}

module.exports = connectToMySQL;
