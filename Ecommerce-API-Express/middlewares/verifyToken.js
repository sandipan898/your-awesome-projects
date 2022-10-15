const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if(error) return res.status(403).json({ message: "Token is not valid!"});
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({ message: "You are not authenticated!"});
    }
}

module.exports = verifyToken;