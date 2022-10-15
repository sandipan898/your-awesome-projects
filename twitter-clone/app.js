const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const tweet = require('./api/tweet.js')
const user = require('./api/user.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/tweet', tweet)
app.use('/user', user)

mongoose.connect(`mongodb://localhost/twitter`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('✔️ Connected to MongoDB'))
	.catch((err) => console.error(err))

app.listen(3000)