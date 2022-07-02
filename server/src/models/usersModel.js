const connection = require('./connection');

const createUser = async (data) => {
  const { username, password } = data;
  const query = `INSERT INTO ScheduleDatabase.users (username, password) VALUES (?, ?);`;
  const [userCreated] = await connection.execute(query, [username, password]);
  return {
    id: userCreated.insertId,
    username,
    password,
  }; 
};

const getUserByUsername = async (username) => {
  const query = `SELECT * FROM ScheduleDatabase.users WHERE username = ? `;
  const [user] = await connection.execute(query, [username]);
  return user; 
};

const getUserById = async (id) => {
  const query = `SELECT * FROM ScheduleDatabase.users WHERE id = ? `;
  const [user] = await connection.execute(query, [id]);
  return user; 
};

const getUserByEmail = async (email) => {
  const query = `SELECT * FROM ScheduleDatabase.users WHERE email = ? `;
  const [user] = await connection.execute(query, [email]);
  return user; 
};

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  getUserByEmail
}