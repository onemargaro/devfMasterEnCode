import knex from '../config.js';
import createKnexModel from '../utils/createKnexModel.js';

const properties = ['rental_id', 'title', 'address', 'guests', 'details', 'is_active', 'created_at'];
const tableName = 'rentals';
const tableId = 'rental_id';

const Rental = createKnexModel(knex, tableName, properties, tableId);

export default Rental;
