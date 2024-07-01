const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { jwtSecret } = require('./config');

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, jwtSecret, {
    expiresIn: '1h',
  });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = { id: decoded.id, username: decoded.username };
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Failed to authenticate token' });
  }
};

exports.handleError = (err, res) => {
  console.error(err);
  res.status(500).json({ error: 'An error occurred' });
};

exports.generateId = () => {
  return crypto.randomBytes(8).toString('hex');
};
