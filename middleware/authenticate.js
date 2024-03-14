
require('dotenv').config();
const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = process.env;
const secretKey = ACCESS_TOKEN_SECRET;

// Middleware
const authenticate = (req, res, next) => {
  const authorizationClient = req.headers['authorization'];
  const token = authorizationClient && authorizationClient.split(' ')[1]

  // check token
  if (!token) {
    return res.status(401).send('This API requires authentication. Please log in to proceed.');
  }

  // evrify token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token! Please try again.');
    }

    req.userId = decoded.id;

    next();
  });
};

module.exports = authenticate