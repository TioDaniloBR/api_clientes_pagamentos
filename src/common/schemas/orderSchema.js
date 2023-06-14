const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    client_email: {type: String, required: true},
    date: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Orders', OrderSchema);