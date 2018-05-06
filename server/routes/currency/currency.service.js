const axios = require('axios');
const parseString = require('xml2js').parseString;

const getCurrencies = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml').then((res) => {
            parseString(res.data, (err, result) => {
                const currencies = {};
                const currencyArr = result['gesmes:Envelope'].Cube[0].Cube[0].Cube;
                currencyArr.forEach((currency) => {
                    currencies[currency.$.currency] = Number(currency.$.rate);
                });
                currencies['EUR'] = 1;
                resolve(currencies);
            });
        });
    });
};



module.exports = {
    getCurrencies
};
