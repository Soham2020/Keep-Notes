const Notes = require('../models/noteSchema');

// learnt a new thing....
const noteController = {
    getNotes: async (req, res) => {
        try{
            const notes = await Notes.find({users_id: req.user.id});
            res.status(200).json(notes);
        }catch (err) {
            return res.status(404).json({msg: err.message});
        }
    },
    createNote: async (req, res) => {
        try{
            const { title, content } = req.body;
            const newNote = new Notes({
                title,
                content,
                users_id: req.user.id
            });
            await newNote.save();
            res.status(200).json({msg: "Created a Note"})
        }catch (err) {
            return res.status(502).json({msg: err.message});
        }
    },
    deleteNote: async (req, res) => {
        try{
            await Notes.findByIdAndDelete(req.params.id);
            res.status(200).json({msg: "Deleted a Note"})
        }catch (err) {
            return res.status(502).json({msg: err.message});
        }
    },
    updateNote: async (req, res) => {
        try{
            const { title, content } = req.body;
            await Notes.findOneAndUpdate({
                _id: req.params.id},{
                    title,
                    content
            });
            res.status(200).json({msg: "Updated a Note"});
        }catch (err) {
            return res.status(502).json({msg: err.message});
        }
    },
    getNote: async (req, res) => {
        try{
            const note =  await Notes.findById(req.params.id);
            res.status(200).json(note);
        }catch (err) {
            return res.status(502).json({msg: err.message});
        }
    }
}

module.exports = noteController;