const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    users_id : {
        type: String,
        required: true
    }
});

const Note = mongoose.model('NOTE', noteSchema);
module.exports = Note;