const usersModel = require('../models/usersModel');
const { StatusCodes } = require('http-status-codes');
const generateToken = require('../../src/helpers/generateToken');

const createUser = async (data) => {
const { username, password } = data;
  const userExists = await usersModel.getUserByUsername(username);
  if (userExists) throw new Error({ status: StatusCodes.BAD_REQUEST, message: 'User already exists'})
  const userCreated = await usersModel.createUser(username, password);
  await login(userCreated);
};

const login = async (userData) => {
  const { id } = userData;
  const userExists = await usersModel.getUserById(id);
  if (!userExists) throw new Error({ status: StatusCodes.NOT_FOUND, message: 'User not found'});

  const { _password, ...payload } = user;
  const token = await generateToken(payload);
  return token;
};

module.exports = {
  createUser,
  login,
}