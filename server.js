require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');
const User = require('./models/user');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const app = express();
const { PORT: port, ACCESS_TOKEN_SECRET: secretKey } = process.env;
const connectToDatabase = require('./database/connect');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

connectToDatabase();

// API đăng nhập
app.post('/login', async (req, res) => {
  try {
      const {email, password} = req.body

      if (!email && !password) {
          return res.status(404).json('wrong user!');
      }

      const findUser = await User.findOne({
        where: {
          email: email,
          password: password
        }
      });
      const token = await jwt.sign({ id: findUser.id }, secretKey, { expiresIn: '1h' });

      res.json({
          token,
      });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

