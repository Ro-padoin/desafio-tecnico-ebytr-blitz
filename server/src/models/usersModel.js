const connection = require('./connection');

const createUser = async (data) => {
  const { username, password } = data;
  const query = `INSERT INTO Schedule.user (username, password) VALUES (?, ?);`;
  const [userCreated] = await connection.execute(query, [username, password]);
  return {
    id: userCreated.insertId,
    username,
    password,
  }; 
};

const getUserByUsername = async (username) => {
  const query = `SELECT * FROM Schedule.user WHERE username = ? `;
  const [user] = await connection.execute(query, [username]);
  return user; 
};

const getUserById = async (id) => {
  const query = `SELECT * FROM Schedule.user WHERE id = ? `;
  const [user] = await connection.execute(query, [id]);
  return user; 
};

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
}