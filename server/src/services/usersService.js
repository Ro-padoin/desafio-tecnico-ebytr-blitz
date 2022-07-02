const usersModel = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const { StatusCodes } = require('http-status-codes');
const newToken = require('../../src/helpers/generateToken');

const createUser = async (data) => {
const { email } = data;

  const userExists = await usersModel.getUserByEmail(email);

  if (userExists.length > 0) throw ({ status: StatusCodes.BAD_REQUEST, message: 'User already exists.' })

  const password = await bcrypt.hash(data.password, 8);

  const userCreated = await usersModel.createUser({...data, password });

  return createToken(userCreated);
};

const login = async (userData) => {
  const { email, password } = userData;

  const userExists = await usersModel.getUserByEmail(email);

  const comparePassword = bcrypt.compareSync(password, userExists.password);

  if (!userExists || (userExists.email !== email && !comparePassword)) {
    throw ({ status: StatusCodes.NOT_FOUND, message: 'User not found'});
  }

  return createToken(userExists);
};

const createToken  = (data) => {  
  const { password, ...payload } = data;

  const token = newToken.generateToken(payload);

  return token;
};

module.exports = {
  createToken,
  createUser,
  login,
}