const express = require('express')
const Controller = require('./index')
const response = require('../../../network/response')
const router = express.Router()

router.get('/', list)

function list (req, res, next) {
  Controller.list(req.body)
    .then((list) => response.success(req, res, list, 200))
    .catch(next)
}

module.exports = router
