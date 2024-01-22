const mongoose = require ('mongoose');
const reminderSchema = mongoose.Schema({
    body:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Reminders', reminderSchema);