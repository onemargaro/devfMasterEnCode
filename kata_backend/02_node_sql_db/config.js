const env = process.env.NODE_ENV;

const knexFile = require("./knexfile");
const knex = require("knex");

const knexInstance = knex(knexFile[env]);

module.exports = knexInstance;
