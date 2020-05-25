const StorageManager = require('@slynova/flydrive')

const storage = new StorageManager({
  default: 'local',
  disks: {
    local: {
      driver: 'local',
      root: 'public/uploads'
    }
  }
})

module.exports = storage.disk('local')
