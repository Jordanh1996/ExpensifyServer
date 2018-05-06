const knex = require('../../database/mysql');

const getBillsByUserId = (userId) => {
    return knex('bills').select().where({
        userId
    });
};

const addBill = (name, userId) => {
    return knex('bills').insert({
        name,
        userId
    });
};

const updateBill = (name, billId, userId) => {
    return knex('bills').where({
        userId,
        id: billId
    }).update({
        name,
        updated_at: knex.fn.now()
    });
};

const removeBill = (billId, userId) => {
    return new Promise((resolve, reject) => {
        knex('expenses').where({ billId }).del().then(() => {
            knex('bills').where({
                id: billId,
                userId
            }).del().then(() => {
                resolve();
            });
        });
    });
};

module.exports = {
    getBillsByUserId,
    addBill,
    updateBill,
    removeBill
};
