const knex = require("knex"),
  knexConfig = require("../knexfile.js");

module.exports = knex(knexConfig.development);
