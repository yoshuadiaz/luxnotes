const MODEL = 'Note'

module.exports = (store) => {
  async function list (body) {
    const { itemsPerPage, currentPage } = body
    return store.list(MODEL, { itemsPerPage, currentPage })
  }

  async function insert (data) {
    return store.insert(MODEL, data)
  }

  return {
    list,
    insert
  }
}
