const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const errors = require('../network/errors')
const note = require('./components/note/network')

const app = express()

app.use(bodyParser.json())

app.use('/api/note', note)

app.use(errors)

app.listen(config.api.port, () => {
  console.log(`Listen on http://localhost:${config.api.port}`)
})
