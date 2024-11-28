const { Pool } = require('pg');
const db = require('../db/connection');

const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.db_port,
  database: db.database,
});

pool
  .connect()
  .then(() => console.log('Conexión exitosa a PostgreSQL'))
  .catch((err: any) => console.error('Error al conectar pepepe:', err.message));

module.exports = pool;
