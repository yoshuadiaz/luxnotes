'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    url: DataTypes.STRING,
    note_id: DataTypes.UUID
  }, {});
  File.associate = function(models) {
    // associations can be defined here
  };
  return File;
};