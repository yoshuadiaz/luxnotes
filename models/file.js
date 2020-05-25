'use strict'
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    url: DataTypes.STRING,
    note_id: DataTypes.UUID
  }, {})
  File.associate = function (models) {
    File.belongsTo(models.Note, {
      foreignKey: 'note_id'
    })
  }
  return File
}
