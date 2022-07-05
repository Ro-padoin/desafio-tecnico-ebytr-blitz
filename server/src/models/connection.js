const mysql = require('mysql2/promise');
const constants = require('./constants');

const connection = mysql.createPool({...constants});

module.exports = connection;
