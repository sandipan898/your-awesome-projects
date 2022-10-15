const verifyToken = require("../middlewares/verifyToken");
const verifyTokenAndAdmin = require("../middlewares/verifyTokenAndAdmin");
const verifyTokenAndAuthorization = require("../middlewares/verifyTokenAndAuthorization");
const Order = require("../models/Order");

const router = require("express").Router();

// CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Order has been deleted" });
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET USER ORDER
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const qNew = req.query.new;
    try {
        const orders = qNew 
            ? await Order.find().sort({ createdAt: -1 }).limit(5)
            : await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET MONTHLY INCOME
router.get("/income/monthly", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ])
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;