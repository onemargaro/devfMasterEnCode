const createKnexModel = (knex, tableName, properties, tableId) => {
    const findAll = () => {
        return knex.select(properties).from(tableName).where({ is_active: true });
    }

    const findOneById = (id) => {
        return knex.select(properties).from(tableName).where({ [tableId]: id, is_active: true })
    }

    /*
     * Search Criteria
     * Object {}
     */
    const findOne = (searchCriteria) => {
        return knex.select(properties).from(tableName).where({ ...searchCriteria, is_active: true })
    }

    const updateOneById = (id, updateBody) => {
        return knex.update(updateBody).from(tableName).where({ [tableId]: id, is_active: true });
    }

    const deleteOneById = (id) => {
        return knex.update({ is_active: false }).from(tableName).where({ [tableId]: id });
    }

    const create = (body) => {
        return knex(tableName).insert(body);
    }

    return {
        create,
        findAll,
        findOne,
        findOneById,
        updateOneById,
        deleteOneById
    }
}

export default createKnexModel
