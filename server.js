require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const app = express();
const { PORT: port } = process.env;
const connectToDatabase = require('./database/connect');

app.use(bodyParser.json());
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

