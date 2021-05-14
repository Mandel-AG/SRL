const { getUsers } = require('../controllers/user.controller');
const app = require('express').Router();



app.get('/', getUsers);







module.exports = app;