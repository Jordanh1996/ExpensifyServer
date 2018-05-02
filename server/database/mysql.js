const knex = require('knex')({
    client: 'mysql2',
    connection: process.env.JAWSDB_URL
});

module.exports = knex;