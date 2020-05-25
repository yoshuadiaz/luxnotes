'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Files', {
          id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.fn('uuid_generate_v4')
          },
          url: {
            type: Sequelize.STRING
          },
          note_id: {
            type: Sequelize.UUID
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        })
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Files')
  }
}
