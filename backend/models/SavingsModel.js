const mongoose = require('mongoose');

const SavingsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    amount: {
        type: Number,
        required: true,
        min: 0, // Assuming the amount should be a non-negative value
    },
    type: {
        type: String,
        default: 'savings',
    },
    date: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value instanceof Date && !isNaN(value),
            message: 'Invalid date',
        },
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50, // Adjust as needed
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Savings', SavingsSchema);
