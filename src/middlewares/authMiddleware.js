const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Remove 'Bearer ' and get the actual token
    const decodedToken = token.split(' ')[1];
    const decoded = jwt.verify(decodedToken, process.env.JWT_SECRET);
    // Attach user info to request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
