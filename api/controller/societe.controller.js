let router = require('express').Router()

//Models 
const Societe = require('../Models/Societe')
//Services
const { verifyMail } = require('../service/mailService')

//Middleware 
const { societeValidation } = require('../middleware/validation')
const User = require('../Models/User')

router.post('/societe', societeValidation(), async (req, res) => {
    const societe = req.body
    //Recherche de l utilisateur en cours
    const user = req.decoded
    let existingUser = await User.findOne({
        where:{
            user_email:user.user_email
        }
    })
    

    societe.societe_date_creation = Date.now()
    societe.societe_user_admin = existingUser.id
    const saveSociete = await Societe.create(societe)
    //Si sauvegarde reussi
    if (saveSociete) {
        return res.status(200).send({ message: "Societe sauvgardee", status: "success" })
    }
    else {
        return res.status(400).send({ message: "Erreur de sauvegarde", status: "erreur" })
    }
    
})

module.exports = router