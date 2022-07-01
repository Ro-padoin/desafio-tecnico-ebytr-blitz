const express = require('express');
const users = require('../controllers/usersController');
const signupRoute = express.Router();
require('dotenv').config();

signupRoute.use(express.json());

signupRoute.post('/', users.createUser);

module.exports = signupRoute;