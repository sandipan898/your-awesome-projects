const router = require('express').Router();
const pool = require('../db');

// CREATE
router.post("/", async (req, res) => {
    const { description } = req.body;
    const date = new Date();
    const currentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    try{
        const newTodo = await pool.query(
            "INSERT INTO todo(description, createdAt) VALUES($1, $2) RETURNING *", 
            [description, currentDate]
        )
        res.status(200).json({ success: true, message: "Todo created successfully", todo: newTodo.rows[0] })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// READ ALL
router.get("/", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.status(200).json({ success: true, message: "Todos fetched successfully!", todo: allTodos.rows});
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// READ ONE
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const foundTodo = await pool.query(
            "SELECT * FROM todo WHERE todo_id=$1", 
            [id]
        );
        res.status(200).json({success: true, message: "Todo fetched successfully!", todo: foundTodo.rows[0]});
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
        const updatedTodo = await pool.query(
            "UPDATE todo SET description=$1 WHERE todo_id=$2 RETURNING *",
            [description, id]
        );
        res.status(200).json({success: true, message: "Todo updated successfully!", todo: updatedTodo.rows[0] });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id=$1 RETURNING *",
            [id]
        )
        res.status(200).json({success: true, message: "Todo deleted successfully!", todo: deletedTodo.rows[0] })
    } catch (error) {
        res.status(400).send({ success: false, message: error.message })
    }
})

module.exports = router;