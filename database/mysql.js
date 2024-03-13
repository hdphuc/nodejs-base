const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, DB_TYPE } = process.env;

async function connectToMySQL() {
  try {

    var  sequelize = new Sequelize(
      MYSQL_DATABASE,
      MYSQL_USER,
      MYSQL_PASSWORD,
      {
        host: MYSQL_HOST,
        dialect: DB_TYPE,
        port: MYSQL_PORT
      }
    );

    await sequelize.authenticate().then(() => {
        console.log('Successfully connected to Mysql database!');
      })
      .catch(async (error) => {
        console.error('Error attempting database connection:', error);
        const connection = await mysql.createConnection({ host: MYSQL_HOST, port: MYSQL_PORT, user: MYSQL_USER, password: MYSQL_PASSWORD });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\`;`);

        await sequelize.close();
        process.exit(1);
      });

    return sequelize;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1);
  }
}

module.exports = connectToMySQL;
