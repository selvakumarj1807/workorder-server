const { request } = require('express');
const mongoose = require('mongoose');

const RecentsalesSchema = new mongoose.Schema({
    number: {
        type: String,
        required: [true, "Pls enter the number"]
    },
    customer: {
        type: String,
        required: [true, "Pls enter customer"]
    },
    product: {
        type: String,
        required: [true, "Pls enter product"]
    },
    price: {
        type: String,
        required: [true, "Pls enter price"]
    },
    status: {
        type: String,
        required: [true, "Pls enter status"]
    },
    id: {
        type: String,
        required: [true, "Pls enter id"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('recentsales', RecentsalesSchema);

module.exports = schema;