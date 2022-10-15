const router = require('express').Router();
const pool = require('../db');
const db = require('../models');
const Todo = db.todos;
const Op = db.sequalize.Op;

// CREATE
router.post("/", async (req, res) => {
    const { description } = req.body;
    const date = new Date();
    const currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    
    try{
        const newTodo = await Todo.create({ description, createdAt: currentDate });
        res.status(200).json({ success: true, message: "Todo created successfully", todo: newTodo })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// READ ALL
router.get("/", async (req, res) => {
    try {
        const allTodos = await Todo.findAll();
        res.status(200).json({ success: true, message: "Todos fetched successfully!", todo: allTodos });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// READ ONE
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const foundTodo = await Todo.findByPk(id);
        if (!foundTodo) return res.status(404).send({ success: false, message: "Todo not found!" })
         res.status(200).json({success: true, message: "Todo fetched successfully!", todo: foundTodo });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// UPDATE
router.put("/:id", async (req, res) => {
    const  { id } = req.params;
    const { description } = req.body;
    const date = new Date();

    try {
        const updatedTodo = await Todo.update({description, createdAt: date}, { where: { id }});
        res.status(200).json({success: true, message: `Todo with id ${updatedTodo} has been updated successfully!` });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await Todo.destroy({ where: {id} })
        res.status(200).json({success: true, message: `Todo with id ${deletedTodo} has been deleted successfully!` })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

module.exports = router;