const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const notesApi = require('./notesApi');

// // get notes router
// router.get('/getNotes', auth, async (req, res) => {
//     try {
//         const notes = await Note.find({ userid: req.user.id });
//         res.json(notes);
//     }catch(err) {
//         return res.status(500).json({ msg: err.message });
//     }
// });

// // post a new note router
// router.post('/createNote', auth, async (req, res) => {
//     try {
//         const { title, content } = req.body;
//         const createNote = new Note({
//             title: title,
//             content: content,
//             userid: req.user.id
//         });
//         await createNote.save();
//         res.status(200).json({ msg: "Note Created Successfully!!" });
//     }catch(err) {
//         return res.status(500).json({ msg: err.message });
//     }
// });

// // delete a note router

router.route('/')
    .get(auth, notesApi.getNotes)
    .post(auth, notesApi.createNote)

router.route('/:id')
    .get(auth, notesApi.getNote)
    .put(auth, notesApi.updateNote)
    .delete(auth, notesApi.deleteNote)

module.exports = router;