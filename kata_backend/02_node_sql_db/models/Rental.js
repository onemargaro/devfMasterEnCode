const knex = require('../config');

const properties = ['rental_id', 'title', 'address', 'guests', 'description', 'is_active', 'created_at'];
const TABLE_NAME = 'rentals';

const findAll = () => {
    return knex.select(properties).from(TABLE_NAME).where({ is_active: true });
}

const findOneById = (id) => {
    return knex.select(properties).from(TABLE_NAME).where({ rental_id: id, is_active: true })
}

const updateOneById = (id, updateBody) => {
    return knex.update(updateBody).from(TABLE_NAME).where({ rental_id: id, is_active: true });
}

const deleteOneById = (id) => {
    return knex.update({ is_active: false }).from(TABLE_NAME).where({ rental_id: id });
}

const create = (bodyRental) => {
    return knex(TABLE_NAME).insert(bodyRental);
}

module.exports = {
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById
};
