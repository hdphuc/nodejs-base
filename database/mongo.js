const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

async function connectToMongo() {
  await mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/dev02')
    .then(() => {
      console.log('Successfully connected to MongoDB database!');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB database:', error);
    });

  console.log('Connected to MongoDB database!');
  return mongoose;
}

module.exports = connectToMongo;
