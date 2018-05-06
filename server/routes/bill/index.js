const express = require('express');
const controller = require('./bill.controller');
const authenticate = require('../../middleware/authenticate');

const router = express.Router();

router.get('/userid', authenticate, controller.getBillsByUserId);

router.post('/', authenticate, controller.addBill);

router.patch('/:id', authenticate, controller.updateBill);

router.delete('/:id', authenticate, controller.removeBill);

module.exports = router;
