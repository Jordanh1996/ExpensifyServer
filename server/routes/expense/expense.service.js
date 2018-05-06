const knex = require('../../database/mysql');

const getExpensesByBillId = (billId, userId) => {
    return knex('expenses').where({
        billId,
        userId
    }).select();
};

const addExpense = (name, currency, amount, time, billId, userId) => {
    return knex('expenses').insert({
        name,
        currency,
        amount,
        time,
        billId,
        userId
    });
};

const updateExpense = (name, currency, amount, time, expenseId, userId) => {
    return knex('expenses').where({
        id: expenseId,
        userId
    }).update({
        name,
        currency,
        amount,
        time,
        updated_at: knex.fn.now()
    });
};

const removeExpense = (expenseId, userId) => {
    return knex('expenses').where({
        id: expenseId,
        userId
    }).del();
};

module.exports = {
    getExpensesByBillId,
    addExpense,
    updateExpense,
    removeExpense
};