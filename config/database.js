if (process.env.NODE_ENV !== 'production') require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'nude-develop',
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: true,
    },
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'nude-test',
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorAliases: false,
    logging: true,
    pool: { max: 1 },
    define: {
      timestamps: true,
    },
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorAliases: false,
    define: {
      timestamps: true,
    },
  },
}
