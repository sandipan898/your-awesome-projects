const verifyToken = require("./verifyToken")

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.idAdmin) {
            next();
        } else {
            res.status(403).json({ message: "You are not allowed to perform this operation!"})
        }
    })
}

module.exports = verifyTokenAndAuthorization;

