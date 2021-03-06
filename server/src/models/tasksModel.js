const connection = require('./connection');
const { database } = require('./constants');

const getAllTasks = async () => {
  const query = `SELECT * FROM ${database}.tasks;`;
  const [allTasks] = await connection.execute(query);
  return allTasks;
};

const getTaskById = async (id) => {
  const query = `SELECT * FROM ${database}.tasks WHERE id = ?;`;
  const [taskById] = await connection.execute(query, [id]);
  return taskById;
};

const createTask = async (taskContent) => {
  const { title, description } = taskContent;
  const query = `INSERT INTO ${database}.tasks (title, description) VALUES (?, ?);`;
  const [taskcreated] = await connection.execute(query, [title, description]);
  return taskcreated.insertId; 
};

const updateTask = async (id, taskContent) => {
  const { title, description } = taskContent;
  const query = `UPDATE ${database}.tasks SET title = ?, description = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?;`;
  await connection.execute(query, [String(title), String(description), id]);
  return true;
};

const deleteTask = async (id) => {
  const query = `DELETE FROM ${database}.tasks WHERE id = ?;`;
  await connection.execute(query, [id]);
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}