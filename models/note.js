'use strict'
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    content: DataTypes.TEXT,
    entity_id: DataTypes.UUID
  }, {})
  Note.associate = function (models) {
    Note.hasMany(models.File, {
      foreignKey: 'note_id',
      as: 'files'
    })
  }
  return Note
}
