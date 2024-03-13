require('dotenv').config();
const connectToMongo = require('../database/mongo'); // Import the function
const connectToMySQL = require('../database/mysql');

async function connectToDatabase() {
  const { DB_TYPE } = process.env;

  try {
    if (DB_TYPE === 'mongo') {
      console.log('mongo');
      return await connectToMongo();
    } else if (DB_TYPE === 'mysql') {
      console.log('mysql');
      return await connectToMySQL();
    } else {
      throw new Error('Invalid DB_TYPE environment variable');
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
    // Handle the error here (e.g., throw to the caller)
    throw error; // Or rethrow to indicate failure
  }
}

module.exports = connectToDatabase;