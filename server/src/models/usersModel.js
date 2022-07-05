const connection = require('./connection');
const { database } = require('./constants');

const createUser = async (data) => {
  const { firstName, lastName, email, password } = data;
  const query = `INSERT INTO ${database}.users (firstName, lastName, email, password) VALUES (?, ?, ?, ?);`;
  const [userCreated] = await connection.execute(query, [firstName, lastName, email, password]);
  return {
    id: userCreated.insertId,
    firstName, 
    lastName, 
    email,
    password,
  }; 
};

const getUserByUsername = async (username) => {
  const query = `SELECT * FROM ${database}.users WHERE username = ? `;
  const [user] = await connection.execute(query, [username]);
  return user; 
};

const getUserById = async (id) => {
  const query = `SELECT * FROM ${database}.users WHERE id = ? `;
  const [user] = await connection.execute(query, [id]);
  return user; 
};

const getUserByEmail = async (email) => {
  const query = `SELECT * FROM ${database}.users WHERE email = ?;`;
  const [user] = await connection.execute(query, [email]);
  return user?.[0]; 
};

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  getUserByEmail
}