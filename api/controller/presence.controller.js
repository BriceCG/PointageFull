let router = require('express').Router()
const Presence = require('../Models/Presence')
const {Op} = require('sequelize')
const {QueryTypes} = require('sequelize')
const sequelize = require('../Models/model').sequelize

//middleware
const {needAuth,needRole,needSameDepChef} = require('../middleware/auth')
const {presenceValidation} = require('../middleware/validation')



router.post('/presence',needAuth(),presenceValidation(),async(req,res)=>{
    const {presence_type} = req.body;
    //Verifie si il a deja fait la presence aujourd hui
    let query = `SELECT * FROM pt_presences pp WHERE DAY (NOW() ) = DAY (presence_date ) AND pt_user_user_id_presence = ${req.decoded.user_id}`
    let presenceDay = await sequelize.query(query, { type: QueryTypes.SELECT })
    if (presenceDay.length > 0){
        return res.status(400).send({message:"Vous avez deja fait la presence journaliere"})
    }


    const pt_departement_departement_id_presence = req.decoded.user_departement_id || null
    const savePresence = await Presence.create({
        presence_date: new Date(),
        presence_type: presence_type,
        pt_user_user_id_presence: req.decoded.user_id,
        pt_departement_departement_id_presence,
    })
    if (savePresence){
        return res.status(200).send({status:"success",message:"Presence sauvgardee"})
    }
    else{
        res.status(400).send({status:"erreur",message:"Erreur de sauvgarde"})
    }
})

router.get('/presences',needAuth(),async(req,res)=>{
    console.log(req.decoded.user_id)
    let presences = await Presence.findAll({
       where:{
        pt_user_user_id_presence: req.decoded.user_id
       }
    })
    if (presences){
        return res.status(200).send({status:"succes",presences:presences})
    }
    else{
        return res.status(400).send({status:"erreur",message:"Presences non trouvees"})
    }
})


router.get('/presences/me',needAuth(),async(req,res)=>{
    const user = req.decoded
    let presences = await Presence.findAll({
        where:{
            pt_user_user_id_presence: user.user_id
        }
    })
    if (presences){
        return res.status(200).send({status:"success",presences})
    }
    else{
        return res.status(400).send({status:"erreur",message:"Presences non trouvee"})
    }
})

router.get('/presences/user/:id',needAuth(),needRole('DRH')|| needRole('chef'),needSameDepChef(),async(req,res)=>{
    const presences = await Presence.findAll({
        where:{
            pt_user_user_id_presence: req.params.id
        }
    })
    if (presences){
        return res.status(200).send({status:"success",presences})
    }
    else{
        return res.status(400).send({status:"erreur",message:"Presences non trouvee"})
        
    }
})
module.exports = router