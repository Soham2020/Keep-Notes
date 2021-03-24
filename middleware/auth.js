const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(!token) {
            return res.status(401).json({ msg: "UnAuthorized" });
        }
        jwt.verify(token, process.env.TOKEN, (err, user) => {
            if(err) {
                return res.status(400).json({ msg: "Authorization Failed!!" });
            }
            req.user = user;
            next();
        })
    }catch(err) {
        return res.status(500).json({ msg: err.message });
    }
}

module.exports = auth;