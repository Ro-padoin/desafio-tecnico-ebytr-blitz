const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET || '9IowB%Z14nBKPY$M*oNt^KmRL' ;

const configJWT = {
    expiresIn: '30d',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign({ ...payload }, secretKey, configJWT);

module.exports = { generateToken, configJWT };