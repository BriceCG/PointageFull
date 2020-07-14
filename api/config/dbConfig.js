module.exports = {
    HOST: "localhost",

    USER: "brice",

    PASSWORD: "123456",

    DB: "api_pointage",

    dialect: "mysql",

    pool: {

        max: 5,

        min: 0,

        acquire: 30000,

        idle: 10000

    }
}