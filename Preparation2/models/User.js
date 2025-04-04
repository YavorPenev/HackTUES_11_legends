const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);
