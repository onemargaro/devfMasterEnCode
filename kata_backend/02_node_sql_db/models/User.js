import knex from '../config.js';
import createKnexModel from '../utils/createKnexModel.js';

const properties = ['user_id', 'first_name', 'last_name', 'email', 'phone', 'password', 'is_active', 'created_at'];
const tableName = 'users';
const tableId = 'user_id';

const User = createKnexModel(knex, tableName, properties, tableId);

export default User;
