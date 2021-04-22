const TABLE_NAME = 'rentals';
exports.up = function(knex) {
    // It create table with the name of the first argument iff the table dont exists
    return knex.schema.createTableIfNotExists(TABLE_NAME, (table) => {
        // Inside of callback function we would define our table
        table.increments("rental_id").primary();
        // table.tipo_de_dato(nombre_de_la_columna).attributos_de_columna
        table.string("title").notNullable();
        table.string("address").notNullable();
        table.integer("guests").notNullable();
        table.text("description");
        table.boolean("is_active").notNullable().defaultTo(true);
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('rentals');
};
