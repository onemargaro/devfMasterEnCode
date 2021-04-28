exports.up = function(knex) {
  return knex.schema.table('rentals', (table) => {
    table.renameColumn('description', 'details');
    table.integer('fk_user').unsigned().references('users.user_id');
  });
};

exports.down = function(knex) {

};
