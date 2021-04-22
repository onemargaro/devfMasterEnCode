const env = process.env.NODE_ENV;

const knexFile = require("./knexfile");
const knex = requiere("knex");

const knexInstance = knext(knexfile[env]);

module.exports = knexInstance;
