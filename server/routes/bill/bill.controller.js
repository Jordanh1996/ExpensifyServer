const service = require('./bill.service');
const _ = require('lodash');

const getBillsByUserId = (req, res) => {
    service.getBillsByUserId(req.user.id).then((bills) => {
        res.send({ bills });
    }).catch(() => {
        res.status(400).send();
    });
};

const addBill = (req, res) => {
    const body = _.pick(req.body, ['name']);
    service.addBill(body.name, req.user.id).then((bill) => {
        res.send({ id: bill[0] });
    }).catch(() => {
        res.status(400).send();
    });
};

const updateBill = (req, res) => {
    const body = _.pick(req.body, ['name']);
    service.updateBill(body.name, req.params.id, req.user.id).then((response) => {
        res.send({ updated: true });
    }).catch(() => {
        res.status(400).send();
    });
};

const removeBill = (req, res) => {
    service.removeBill(req.params.id, req.user.id).then((response) => {
        res.send({
            deleted: true
        });
    }).catch(() => {
        res.status(400).send();
    });
};

module.exports = {
    getBillsByUserId,
    addBill,
    updateBill,
    removeBill
};
