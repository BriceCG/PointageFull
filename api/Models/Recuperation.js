const {sequelize,Sequelize} = require('./model')

const Recuperation = sequelize.define('pt_recuperation',{
    recup_token:{
        type:Sequelize.STRING,
        allowNull:true
    },
    recup_user:{
        type:Sequelize.INTEGER
    },
    recup_etat:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})
module.exports = Recuperation