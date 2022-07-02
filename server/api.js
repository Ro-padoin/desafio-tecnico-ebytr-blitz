const cors = require('cors');
const express = require('express');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const signupRoute = require('./src/routes/signup');
const signinRoute = require('./src/routes/signin');
const tasksRoute = require('./src/routes/tasks');
require('dotenv').config();

const api = express();

api.use(express.json());
api.use(cors());

api.use('/signup', signupRoute);
api.use('/signin', signinRoute);
api.use('/tasks', tasksRoute);

api.use(errorMiddleware);

module.exports = api;