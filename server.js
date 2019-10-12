const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const trueYouUserRoutes = require('./src/routes/trueYouUser.routes')
const streamingRoutes = require('./src/routes/stream.routes')
const errorModel = require('./src/models/error.model')



var app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to login


// reguliere routing

// Endpoint to login
app.use('/Login', trueYouUserRoutes)
app.use('/stream', streamingRoutes)


// handler voor errors
app.use('*', (err, req, res, next) => {
	// I have got an error
	console.dir(err)
	// -> return response naar caller
	res.status(err.code).json({error: err}).end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// for testing purpose
module.exports = app
