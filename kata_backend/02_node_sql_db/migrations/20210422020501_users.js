const TABLE_NAME = 'users';
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists(TABLE_NAME, (table) => {
        table.increments("user_id").primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").notNullable();
        table.string("phone").notNullable();
        table.string("biography").notNullable();
        table.boolean("is_active").notNullable().defaultTo(true);
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(TABLE_NAME);
};
