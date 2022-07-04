const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const taskService = require('../services/tasksService');

const getAllTasks = async (_req, res, next) => {
  try {
    const allTasks = await taskService.getAllTasks();
    res.status(StatusCodes.OK).json(allTasks);
  } catch (error) {
    next(error)
  }
};

const createTask = async (req, res, next) => {
  try {
  const { body } = req;
  const newTask = await taskService.createTask(body);
  res.status(StatusCodes.CREATED).json(newTask);    
  } catch(error) {
    next(error)
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const taskUpdated = await taskService.updateTask(id, body);
    res.status(StatusCodes.OK).json(taskUpdated);
  } catch (error) {
    console.log(error);
    next(error)
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.status(StatusCodes.OK).json({message: ReasonPhrases.OK});
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
}