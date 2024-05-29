const { request } = require('express');
const mongoose = require('mongoose');

const TopsellingSchema = new mongoose.Schema({
    preview: {
        type: String,
        required: [true, "Pls enter the preview"]
    },
    name: {
        type: String,
        required: [true, "Pls enter name"]
    },
    price: {
        type: String,
        required: [true, "Pls enter price"]
    },
    sold: {
        type: String,
        required: [true, "Pls enter sold"]
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

let schema = mongoose.model('topselling', TopsellingSchema);

module.exports = schema;