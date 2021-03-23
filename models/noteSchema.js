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
    userid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Note = mongoose.model('NOTE', noteSchema);
module.exports = Note;