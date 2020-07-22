const {sequelize,Sequelize} = require('./model')
const Poste = sequelize.define("pt_postes",{
    poste_nom:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})
module.exports = Poste