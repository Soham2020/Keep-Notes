const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("User Router");
});

router.post('/register', (req, res) => {
    res.status(200).json({ msg: req.body });
})

module.exports = router;