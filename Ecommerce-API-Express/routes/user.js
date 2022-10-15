const verifyTokenAndAuthorization = require("../middlewares/verifyTokenAndAuthorization");
const verifyTokenAndAdmin = require("../middlewares/verifyTokenAndAdmin");
const User = require("../models/User");

const router = require("express").Router();

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    // Encrypting the password present in req.body and save it back to req.body so that while 
    // updating the password the encrypted password will get saved.
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            password, process.env.PASSWORD_SECRET
        ).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User has been deleted" });
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET USER
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        
        const { password, ...others } = foundUser._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const foundUsers = query ? 
            await User.find().sort().limit(5) 
            : await User.find();
        
        res.status(200).json(foundUsers);
    } catch (error) {
        res.status(500).json(error);
    }
})

// USER STAT
router.get("/stats/monthly", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear) - 1);

    try {
        const stats = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;