const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const properties = ['user_id', 'first_name', 'last_name', 'email', 'phone', 'biography', 'is_active', 'created_at'];
const tableName = 'users';
const tableId = 'user_id';

const User = createKnexModel(knex, tableName, properties, tableId);
module.exports = User;
