const MODEL = 'Note'

module.exports = (store) => {
  async function list (body) {
    const { itemsPerPage, currentPage } = body
    return store.list(MODEL, { itemsPerPage, currentPage })
  }

  return {
    list
  }
}
