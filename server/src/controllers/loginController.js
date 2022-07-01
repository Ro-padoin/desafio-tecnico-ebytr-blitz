const { StatusCodes } = require ('http-status-codes');
const usersService = require('../services/usersService');

const login = async (req, res, next) => {
  try {
    const { body } = req;
    const token = await usersService.login(body);
    res.status(StatusCodes.OK).json({ token });
  } catch(error) {
    next(error);
  }
};

module.exports = {
  login,
}
