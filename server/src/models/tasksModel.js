const connection = require('./connection');

const getAllTasks = async () => {
  const query = `SELECT * FROM ScheduleDatabase.tasks;`;
  const [allTasks] = await connection.execute(query);
  return allTasks;
};

const getTaskById = async (id) => {
  const query = `SELECT * FROM ScheduleDatabase.tasks WHERE id = ?;`;
  const [taskById] = await connection.execute(query, [id]);
  return taskById;
};

const createTask = async (task) => {
  const { title, description } = task;
  const query = `INSERT INTO ScheduleDatabase.tasks (title, description) VALUES (?);`;
  const [taskcreated] = await connection.execute(query, [title, description]);
  return taskcreated.insertId; 
};

const updateTask = async (task) => {
  const { id, title, description  } = task;
  const query = `UPDATE ScheduleDatabase.tasks SET title = ?, description = ? WHERE id = ?;`;
  const [taskUpdated] = await connection.execute(query, [title, description, id]);
  return taskUpdated.affectedRows;
};

const deleteTask = async (id) => {
  const query = `DELETE FROM ScheduleDatabase.tasks WHERE id = ?;`;
  const [taskDeleted] = await connection.execute(query, [id]);
  return taskDeleted.affectedRows;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}