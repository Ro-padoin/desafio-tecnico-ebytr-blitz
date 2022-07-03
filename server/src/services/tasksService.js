const { StatusCodes } = require('http-status-codes');
const tasksModel = require('../models/tasksModel');

const getAllTasks = async () => {
  const allTasks = await tasksModel.getAllTasks();
  if (allTasks.length === 0) throw ({status: StatusCodes.NOT_FOUND, message: 'Tasks not found'});
  return allTasks;
};

const createTask = async (taskContent) => {
  const taskId = await tasksModel.createTask(taskContent);
  if(!taskId) throw ({status: StatusCodes.NOT_ACCEPTABLE, message: 'This operation could not be performed, please try again later.' }); 
  const newTask = await tasksModel.getTaskById(taskId);
  return newTask?.[0];
};

const updateTask = async (id, taskContent) => {
  const affectedRows = await tasksModel.updateTask(id, taskContent);
  if (affectedRows <= 0) throw ({status: StatusCodes.NOT_ACCEPTABLE, message: 'This operation could not be performed, please try again later.'});
  const taskUpdated = await tasksModel.getTaskById(id);
  return taskUpdated;
  
};

const deleteTask = async (id) => {
  const taskDeleted = await tasksModel.deleteTask(id);
  if (taskDeleted <= 0) throw ({status: StatusCodes.NOT_ACCEPTABLE, message: 'This operation could not be performed, please try again later.'});
  return StatusCodes.ACCEPTED;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
}