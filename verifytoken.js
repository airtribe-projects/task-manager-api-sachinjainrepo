const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('./config/config');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  
  // Extract token from "Bearer <token>" format
  const token = authHeader && authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7) 
    : authHeader;

  if (!token) {
    return res.status(401).json({
      message: 'No token provided'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: 'Invalid or expired token'
      });
    }

    req.user = user;
    next();
  });
}

module.exports = verifyToken