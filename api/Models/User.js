const {sequelize,Sequelize} = require('./model')
const User = sequelize.define("pt_user", {
    user_username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_role: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_departement_id: {
        type: Sequelize.INTEGER
    },
    user_etat:{
        type: Sequelize.STRING
    }
    

},{
    timestamps:false
})

module.exports = User