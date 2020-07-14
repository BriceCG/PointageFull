const {sequelize,Sequelize} = require('./model')

const Presence = sequelize.define('pt_presence',{
    presence_date:{
        type: Sequelize.DATE,
    },
    pt_user_user_id_presence:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    pt_departement_departement_id_presence:{
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