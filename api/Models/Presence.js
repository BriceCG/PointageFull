const {sequelize,Sequelize} = require('./model')

const Presence = sequelize.define('pt_presence',{
    presence_date:{
        type: Sequelize.DATE,
    },
    presence_user:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    presence_type: {
        type: Sequelize.STRING
    }
},{
    timestamps:false
})
module.exports = Presence