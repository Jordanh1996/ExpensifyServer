const express = require('express');
const controller = require('./currency.controller');

const router = express.Router();

router.get('/', controller.getCurrencies);

module.exports = router;