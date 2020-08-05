require('dotenv').config()
import knex from 'knex';

const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
})

export default db;