const { StatusCodes } = require ('http-status-codes');
const usersService = require('../services/usersService');

const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const token = await usersService.createUser(body);
    return res.status(StatusCodes.OK).json({ token });
  } catch(error) {
    next(error);
  }
};

module.exports = {
  createUser,
}
