const { config } = require('dotenv');

config();

module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  secret: process.env.DB_SECRET_KEY,
};
