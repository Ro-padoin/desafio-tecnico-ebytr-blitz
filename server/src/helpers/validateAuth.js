const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { configJWT } = require('../helpers/generateToken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET  || '@SAayamUfwkZ$2csG$ynYNC#H';

const validateAuth = (req, _res, next) => {
    const token = req.headers.authorization;
    
    if (!token) next({ status: StatusCodes.UNAUTHORIZED, message: 'Token not Found' });

    jwt.verify(token, secretKey, configJWT.algorithm, (error, userInfo) => {
        if (error) next({ status: STATUS_HTTP_UNAUTHORIZED, message: expiredOrInvalidToken });
        req.userInfo = userInfo;
    });    
    next();
};

module.exports = validateAuth;