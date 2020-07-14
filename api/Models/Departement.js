const { sequelize, Sequelize } = require('./model')
const Departement = sequelize.define("pt_departement", {
    departement_nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    departement_chef_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
  
},{
    timestamps:false
})


module.exports =  Departement
