const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const properties = ['rental_id', 'title', 'address', 'guests', 'description', 'is_active', 'created_at'];
const tableName = 'rentals';
const tableId = 'rental_id';

const Rental = createKnexModel(knex, tableName, properties, tableId);

module.exports = Rental;
