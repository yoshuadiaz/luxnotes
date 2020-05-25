const store = require('../models')

const DEFAULTS = {
  ITEMS_PER_PAGE: 5,
  CURRENT_PAGE: 1
}

const pagination = (count, rows, itemsPerPage, currentPage) => ({
  total: count,
  itemsPerPage,
  lastPage: Math.ceil(count / itemsPerPage),
  page: currentPage,
  rows: [...rows]
})
async function list (model, paginationConfig) {
  const {
    itemsPerPage = DEFAULTS.ITEMS_PER_PAGE,
    currentPage = DEFAULTS.CURRENT_PAGE
  } = paginationConfig
  const offset = currentPage <= 1 ? 0 : (currentPage - 1) * itemsPerPage
  return store[model].findAndCountAll({
    limit: itemsPerPage,
    offset
  }).then(({ count, rows }) => pagination(count, rows, itemsPerPage, currentPage))
}
async function get (model, id) {
  return store[model].findByPk(id)
}
async function insert (model, data) {
  return store[model].create(data)
}
async function update (model, id, data) {
  return store[model].update({ ...data }, { where: { id } })
}
async function remove (model, id) {
  const instance = await store[model].findByPk(id)
  await instance.destroy()
  return true
}
async function query (model, where, paginationConfig, include = {}) {
  const {
    itemsPerPage = DEFAULTS.ITEMS_PER_PAGE,
    currentPage = DEFAULTS.CURRENT_PAGE
  } = paginationConfig
  return store[model].findAndCountAll({
    where,
    include
  }).then(({ count, rows }) => pagination(count, rows, itemsPerPage, currentPage))
}

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
  query
}
