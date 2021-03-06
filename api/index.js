const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const config = require('../config')
const errors = require('../network/errors')
const note = require('./components/note/network')
const notFound = require('../network/notFound')

const app = express()
const staticRoute = path.join(__dirname + '/../public/uploads')

app.use(bodyParser.json())
app.use('/static', express.static(staticRoute))

app.use('/api/note', note)

app.all('*', notFound)
app.use(errors)

app.listen(config.api.port, '0.0.0.0', () => {
  console.log(`Listen on http://localhost:${config.api.port}`)
})
