const service = require('./currency.service');

const getCurrencies = (req, res) => {
    service.getCurrencies().then((currencies) => {
        res.send({ currencies });
    }).catch(() => {
        res.status(400).send();
    });
};

module.exports = {
    getCurrencies
};
