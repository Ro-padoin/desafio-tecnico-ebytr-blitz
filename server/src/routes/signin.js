const express = require('express');
const loginController = require('../controllers/loginController')
const signinRoute = express.Router();
require('dotenv').config();

signinRoute.use(express.json());

signinRoute.post('/', loginController.login);

module.exports = signinRoute;