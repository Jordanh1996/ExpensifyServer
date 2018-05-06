const express = require('express');
const controller = require('./expense.controller');
const authenticate = require('../../middleware/authenticate');

const router = express.Router();

router.get('/userid/:billid', authenticate, controller.getExpensesByBillId);

router.post('/add/:billid', authenticate, controller.addExpense);

router.patch('/update/:expenseid', authenticate, controller.updateExpense);

router.delete('/:expenseid', authenticate, controller.removeExpense);

module.exports = router;
