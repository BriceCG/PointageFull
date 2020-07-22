let router = require('express').Router()

//Models 
const Societe = require('../Models/Societe')
//Services
const { verifyMail } = require('../service/mailService')

//Middleware 
const { societeValidation } = require('../middleware/validation')

router.post('/societe', societeValidation(), async (req, res) => {
    const societe = req.body
    const { societe_adresse_email } = req.body
    societe.societe_date_creation = Date.now()
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