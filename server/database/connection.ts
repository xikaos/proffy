import config from './config';
import knex from 'knex';

const db = knex(config)

export default db;