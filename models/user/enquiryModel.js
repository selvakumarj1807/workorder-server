const { request } = require('express');
const mongoose = require('mongoose');

const EnquiryModelSchema = new mongoose.Schema({
    year: {
        type: String,
        required: [true, "Please enter Year"]
    },
    make: {
        type: String,
        required: [true, "Please enter Make"]

    },
    model: {
        type: String,
        required: [true, "Please enter Model"]
    },
    contactName: {
        type: String,
        required: [true, "Please enter Contact name"]
    },
    email: {
        type: String,
        required: [true, "Please enter Email"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Please enter MobileNumber"]
    },
    postalCode: {
        type: String,
        required: [true, "Please enter PostalCode"]
    },
    shippingMethod: {
        type: String,
        required: [true, "Please Select the Shipping Method"]
        // required: [true, "Pls enter shipping method"],
        // enum: {
        //     values: [
        //         'option-1',
        //         'option-2',
        //         'option-3',
        //     ],
        //     message: "Pls Select Correct shipping Method"
        // }
    }, 
    state: {
        type: String,
        required: [true, "Please select State"]
    },
    additionalNotes : {
        type: String,
        },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Enquiry', EnquiryModelSchema);

module.exports = schema;