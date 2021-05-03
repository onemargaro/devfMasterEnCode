import dotenv from 'dotenv';
import knex from 'knex';
import knexFile from './knexfile.js';

dotenv.config({ path: '.env' });
const env = process.env.NODE_ENV;
const knexInstance = knex(knexFile[env]);

export default knexInstance;
