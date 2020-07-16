const Sequelize = require('sequelize')
const dbConfig = require('../config/dbConfig')
require('dotenv').config()

let sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
}
module.exports = db