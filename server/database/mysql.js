// const knex = require('knex')({
//     client: 'mysql2',
//     connection: process.env.JAWSDB_URL
// });

// module.exports = knex;

const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const knex = require('knex')(config);

module.exports = knex;