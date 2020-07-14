const Sequelize = require('sequelize')
const dbConfig = require('../config/dbConfig')

let sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
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