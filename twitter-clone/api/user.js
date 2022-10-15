const express = require('express')
const router = express.Router()

const User = require('../models/user.js')


router.get('/:id', async (req, res) => {

	const id = req.params.id

	try {
		const user = await User.findById(id)
		res.json(user)
	}
	catch (err) {
		console.error(err)
		res.json({ error: err })
	}

})

router.post('/new', async (req, res) => {

	const data = req.body

	try {
		const user = await User.insertMany(data)
		res.json(user)
	}
	catch (err) {
		console.error(err)
		res.json({ error: err })
	}

})

module.exports = router