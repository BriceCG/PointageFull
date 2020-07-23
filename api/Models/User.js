const {sequelize,Sequelize} = require('./model')
const User = sequelize.define("pt_user", {
    user_email:{
        type:Sequelize.STRING,
    },
    user_username: {
        type: Sequelize.STRING,
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
    },
    user_nom:{
        type:Sequelize.STRING
    },
    user_prenom:{
        type:Sequelize.STRING
    },
    user_date_naissance:{
        type:Sequelize.DATE
    },
    user_date_creation:{
        type:Sequelize.DATE
    },
    user_date_embauche:{
        type:Sequelize.DATE
    },
    user_addresse_num:{
        type: Sequelize.STRING
    },
    user_addresse_voie:{
        type:Sequelize.STRING
    },
    user_addresse_complement:{
        type:Sequelize.STRING,
        allowNull:true
    },
    user_ville:{
        type:Sequelize.STRING
    },
    user_poste:{
        type: Sequelize.INTEGER
    },
    user_societe:{
        type:Sequelize.INTEGER
    }

},{
    timestamps:false
})

module.exports = User