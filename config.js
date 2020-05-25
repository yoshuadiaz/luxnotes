require('dotenv').config()

const dbConfig = {
  username: process.env.DB_USERNAME || null,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || 'DBDemo',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
  dialect: process.env.DB_DIALECT || 'sqlite'
}

module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  sequelize: {
    development: {
      ...dbConfig,
      database: `${dbConfig.database}_development`
    },
    test: {
      ...dbConfig,
      database: `${dbConfig.database}_test`
    },
    production: { ...dbConfig, logging: false }
  }
}
