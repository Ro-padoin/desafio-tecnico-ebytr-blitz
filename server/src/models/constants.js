require('dotenv').config();

module.exports = {
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'projeto',
  host: process.env.MYSQL_HOST || 'localhost',
  database: process.env.MYSQL_DATABASE || 'ScheduleDatabase',
}