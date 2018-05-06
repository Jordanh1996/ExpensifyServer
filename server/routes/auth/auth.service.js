const jwt = require('jsonwebtoken');
const knex = require('../../database/mysql');

const getToken = (profile, id, cb) => {
    jwt.sign({ profile }, process.env.JWT_SECRET, (err, token) => {
        knex('users').where({
            id
        }).update({
            token
        }).then(() => {
            cb(token);
        });
    });
};

module.exports = {
    getToken
};
