const express = require('express');
const tasks = require('../controllers/tasksController');
const tasksRoute = express.Router();
require('dotenv').config();

tasksRoute.use(express.json());

tasksRoute.get('/', tasks.getAllTasks)
tasksRoute.post('/', tasks.createTask);
tasksRoute.put('/:id', tasks.updateTask);
tasksRoute.delete('/:id', tasks.deleteTask);

module.exports = tasksRoute;