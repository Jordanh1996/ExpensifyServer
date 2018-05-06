const knex = require('../database/mysql');

const authenticate = (req, res, next) => {
    const token = req.header('x-auth');
    knex('users').where({
        token
    }).select('id', 'username').then((idArr) => {
        if (idArr.length < 1) {
            return res.redirect('http://localhost:8080/');
        }
        req.user = {
            id: idArr[0].id,
            username: idArr[0].username
        }
        next();
    });
};

module.exports = authenticate;
