const crypto = require('crypto');

exports.handleError = (err, res) => {
  console.error(err);
  res.status(500).json({ error: 'An error occurred' });
};

exports.generateId = () => {
  return crypto.randomBytes(8).toString('hex');
};
