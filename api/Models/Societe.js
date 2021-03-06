const {Sequelize,sequelize} = require('./model')
const Societe = sequelize.define("pt_societe",{
    societe_raison_social:{
        type:Sequelize.STRING,
    },
    societe_siret:{
        type:Sequelize.STRING
    },
    societe_siren:{
        type:Sequelize.STRING
    },
    societe_iban:{
        type: Sequelize.STRING
    },
    societe_adresse_numerique:{
        type:Sequelize.STRING
    },
    societe_adresse_voie:{
        type:Sequelize.STRING
    },
    societe_adresse_complement:{
        type:Sequelize.STRING
    },
    societe_code_postal:{
        type:Sequelize.STRING
    },
    societe_nom_contact:{
        type:Sequelize.STRING
    },
    societe_responsabilite_contact:{
        type:Sequelize.STRING
    },
    societe_telephone_fixe:{
        type:Sequelize.STRING
    },
    societe_telephone_mobile:{
        type:Sequelize.STRING
    },
    societe_adresse_email:{
        type:Sequelize.STRING
    },
    societe_effectif:{
        type:Sequelize.INTEGER
    },
    societe_activite:{
        type: Sequelize.STRING
    },
    societe_zone_geographique:{
        type:Sequelize.STRING
    },
    societe_departement:{
        type:Sequelize.STRING
    },
    socite_actif:{
        type:Sequelize.STRING
    },
    societe_ville:{
        type:Sequelize.STRING
    },
    societe_date_creation:{
        type:Sequelize.DATE
    },
    societe_date_contrat:{
        type:Sequelize.DATE
    },
    societe_date_rupture:{
        type:Sequelize.DATE
    },
    societe_commentaire:{
        type:Sequelize.STRING
    },
    societe_document:{
        type:Sequelize.STRING
    },
    societe_logo:{
        type:Sequelize.STRING
    },
    societe_slogan:{
        type:Sequelize.STRING
    },
    societe_user_admin:{
        type:Sequelize.INTEGER
    }
},{
    timestamps:false
})
module.exports = Societe