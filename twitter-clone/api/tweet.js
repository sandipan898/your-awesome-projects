const express = require('express')
const router = express.Router()

const Tweet = require('../models/tweet.js')

router.post('/new', async (req, res) => {

	const data = req.body

	try {
		const tweet = await Tweet.insertMany(data)
		resjson(tweet)
	}
	catch (err) {
		console.error(err)
		res.json({ error: err })
	}

})

router.get('/:id', async (req, res) => {

	const id = req.params.id

	try {
		const tweet = await Tweet.findById(id)
		resjson(tweet)
	}
	catch (err) {
		console.error(err)
		res.json({ error: err })
	}

})

module.exports = router