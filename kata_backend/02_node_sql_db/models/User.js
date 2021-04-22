const knex = require('../config');

const properties = ['user_id', 'first_name', 'last_name', 'email', 'phone', 'biography', 'is_active', 'created_at'];
const TABLE_NAME = 'users';

const findAll = () => {
    return knex.select(properties).from(TABLE_NAME).where({ is_active: true });
}

const findOneById = (id) => {
    return knex.select(properties).from(TABLE_NAME).where({ user_id: id, is_active: true })
}

const updateOneById = (id, updateBody) => {
    return knex.update(updateBody).from(TABLE_NAME).where({ user_id: id, is_active: true });
}

const deleteOneById = (id) => {
    return knex.update({ is_active: false }).from(TABLE_NAME).where({ user_id: id });
}

const create = (body) => {
    return knex(TABLE_NAME).insert(body);
}

module.exports = {
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById
};
