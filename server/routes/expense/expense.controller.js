const service = require('./expense.service');
const _ = require('lodash');

const getExpensesByBillId = (req, res) => {
    service.getExpensesByBillId(req.params.billid, req.user.id).then((expenses) => {
        res.send({ expenses });
    }).catch(() => {
        res.status(400).send();
    });
};

const addExpense = (req, res) => {
    const body = _.pick(req.body, ['name', 'currency', 'amount', 'time']);
    service.addExpense(body.name, body.currency, body.amount, body.time, req.params.billid, req.user.id).then((expense) => {
        res.send({ id: expense[0] });
    }).catch(() => {
        res.status(400).send();
    });
};

const updateExpense = (req, res) => {
    const body = _.pick(req.body, ['name', 'currency', 'amount', 'time']);
    service.updateExpense(body.name, body.currency, body.amount, body.time, req.params.expenseid, req.user.id).then((expense) => {
        res.send({ updated: true });
    }).catch((e) => {
        res.status(400).send();
    });
};

const removeExpense = (req, res) => {
    service.removeExpense(req.params.expenseid, req.user.id).then((response) => {
        res.send({
            deleted: true
        });
    }).catch(() => {
        res.status(400).send();
    });
};

module.exports = {
    getExpensesByBillId,
    addExpense,
    updateExpense,
    removeExpense
};
