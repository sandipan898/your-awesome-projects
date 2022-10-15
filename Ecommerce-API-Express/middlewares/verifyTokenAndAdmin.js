const verifyToken = require("./verifyToken")

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            console.log("user", req.user)
            res.status(403).json({ message: "You are not allowed to perform this operation!"})
        }
    })
}

module.exports = verifyTokenAndAdmin;

