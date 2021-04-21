const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const app = require('../routes/memo.route');
const secret =  process.env.SECRET_TOKEN;


exports.checkAuthentification = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.sendStatus(403);
  } else {
    next();
  }
};
