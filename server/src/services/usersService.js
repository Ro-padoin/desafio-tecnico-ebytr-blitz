const usersModel = require('../models/usersModel');
const { StatusCodes } = require('http-status-codes');
const generateToken = require('../../src/helpers/generateToken');

const createUser = async (data) => {
const { username, password } = data;
  const userExists = await usersModel.getUserByUsername(username);
  if (userExists) throw new Error({ status: StatusCodes.BAD_REQUEST, message: 'User already exists'})
  const userCreated = await usersModel.createUser(username, password);
  await createToken(userCreated);
};

const login = async (userData) => {
  const { email, password } = userData;
  const userExists = await usersModel.getUserByEmail(email);
  if (!userExists) throw new Error({ status: StatusCodes.NOT_FOUND, message: 'User not found'});
  if (userExists.email === email && userExists.password === password) await createToken(userExists);
};

const createToken  = async (data) => {
  const { _password, ...payload } = data;
  const token = await generateToken(payload);
  return token;
};

module.exports = {
  createToken,
  createUser,
  login,
}