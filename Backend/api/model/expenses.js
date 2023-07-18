const mongoose = require('mongoose');
const { expensesSchema } = require('../schemas/expenses.schema.js');

//Create Expense model

const Expense = mongoose.model('Expense', expensesSchema);

module.exports = { Expense }