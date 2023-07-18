const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    "amount": {type: String, required: true},
    "category": {type: String, required: true},
    "date": {type: String, required: true},
    "description": {type: String, required: true},
});

module.exports = {expensesSchema}