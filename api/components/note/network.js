const express = require('express')
const Controller = require('./index')
const response = require('../../../network/response')
const router = express.Router()
const uploads = require('../../../utils/uploads')

router.get('/', list)
router.post('/', uploads.array('files', 12), insert)
router.delete('/:id', remove)

function list (req, res, next) {
  Controller.list(req.body)
    .then((list) => response.success(req, res, list, 200))
    .catch(next)
}

function insert (req, res, next) {
  Controller.insert(req.body, req.files)
    .then((message) => response.success(req, res, message, 201))
    .catch(next)
}

function remove (req, res, next) {
  Controller.remove(req.params.id)
    .then((message) => response.success(req, res, message, 200))
    .catch(next)
}

module.exports = router
