const express = require('express')
const Controller = require('./index')
const response = require('../../../network/response')
const router = express.Router()
const uploads = require('../../../utils/uploads')
// const storage = require('../../../utils/storage')

router.get('/', list)
router.post('/', uploads.array('files', 12), insert)

function list (req, res, next) {
  Controller.list(req.body, req.query)
    .then((list) => response.success(req, res, list, 200))
    .catch(next)
}

function insert (req, res, next) {
  Controller.insert(req.body, req.files)
    .then((message) => response.success(req, res, message, 201))
    .catch(next)
}

module.exports = router
