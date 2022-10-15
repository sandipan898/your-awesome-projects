const router = require("express").Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Register
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString()
    });
    
    try {
        const savedUser = await newUser.save();

        const accessToken = jwt.sign({
            id: savedUser._id,
            isAdmin: savedUser.isAdmin,
        }, process.env.JWT_SECRET, { expiresIn: "3d" });
    
        const { password, ...others } = savedUser._doc;
        res.status(200).json({ ...others, accessToken });
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Login
router.post("/login", async(req, res) => {
    const { username, password: userPassword } = req.body;
    
    try {
        const foundUser = await User.findOne({ username });
        if(!foundUser) {
            return res.status(404).json({ message: "User not found!" })
        }
        const foundPassword = CryptoJS.AES.decrypt(foundUser.password, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8)
        if (foundPassword !== userPassword) {
            return res.status(401).json({ message: "Invalid Credentials!" })
        }

        const accessToken = jwt.sign({
            id: foundUser._id,
            isAdmin: foundUser.isAdmin,
        }, process.env.JWT_SECRET, { expiresIn: "3d" });

        const { password, ...others } = foundUser._doc;
        res.status(200).json({ ...others, accessToken });
        
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
