const env = process.env.NODE_ENV;
import knex from 'knex';
import knexFile from './knexfile.js';
const knexInstance = knex(knexFile[env]);

export default knexInstance;
