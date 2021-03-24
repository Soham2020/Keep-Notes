const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
    res.send("User Router");
});
// User Registration router
router.post('/register', async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        const userRegister = await User.findOne({ email: email });
        if(userRegister) {
            return res.status(422).json({ msg: "User Already exists!!" })
        }else {
            const passHash = await bcrypt.hash(password, 12);
            const newUer = new User ({
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: passHash
            });
            await newUer.save();
            res.json({ msg: "Registration succesfull!!" });
        }
    }catch(err) {
        return res.status(502).json({ msg: err.message });
    }    
});
// user Login router
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin = await User.findOne({ email: email });
        if(!userLogin) {
            return res.status(404).json({ msg: "Unauthorized" });
        }else {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if(!isMatch) {
                return res.status(401).json({ msg: "Unauthorized" });
            }
            const payload = { id: userLogin._id, username: userLogin.username };
            const token = jwt.sign(payload, process.env.TOKEN, {expiresIn: '1d'});
            // res.status(200).json({ msg: "User Logged in!!" });
            res.json(token);
        }
    }catch(err) {
        return res.status(503).json({ msg: err.message });
    }
});
// Token Verification
router.get('/vtoken', async (req, res) => {
    try {
        const token = req.header("Authorization");
        if(!token) {
            return res.send(false);
        }
        jwt.verify(token, process.env.TOKEN, async (err, verified) => {
            if(err) {
                return res.send(false);
            }else {
                const user = await User.findById(verified.id);
                if(!user) {
                    return res.json(false);
                }else {
                    return res.json(true);
                }
            }
        })
    }catch(err) {
        return res.status(401).json({ msg: err.message });
    }
});

module.exports = router;