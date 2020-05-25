const storage = require('../../../utils/storage')
const MODEL = 'Note'
const FILE = 'File'

module.exports = (store) => {
  async function list (body, query) {
    const { itemsPerPage, currentPage } = body
    if (query.entity_id) {
      return store.query(
        MODEL,
        { entity_id: query.entity_id },
        { itemsPerPage, currentPage }
      )
    }
    return store.list(MODEL, { itemsPerPage, currentPage })
  }

  async function insert (data, files) {
    const note = await store.insert(MODEL, data)
    if (files) {
      files.map(file => {
        const fileName = `${Date.now()}_${file.originalname}`
        storage.put(fileName, file.buffer).then(() => {
          store.insert(FILE, {
            url: `/static/${fileName}`,
            note_id: note.id
          })
        })
      })
    }
    return note
  }

  return {
    list,
    insert
  }
}
