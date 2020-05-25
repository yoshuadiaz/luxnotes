const response = require('./response')

const notFound = (req, res, next) => {
  return response.error(req, res, 'Ups! Endpoint not Found', 404)
}

module.exports = notFound
