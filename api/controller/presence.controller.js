let router = require('express').Router()
const Presence = require('../Models/Presence')
const {Op} = require('sequelize')
const {QueryTypes} = require('sequelize')
const sequelize = require('../Models/model').sequelize
const moment = require('moment')

//middleware
const {needAuth,needRole,needSameDepChef} = require('../middleware/auth')
const {presenceValidation} = require('../middleware/validation')



router.post('/presence',needAuth(),presenceValidation(),async(req,res)=>{
    const {presence_type,presence_start_date,presence_end_date} = req.body;
    let user = req.decoded
    //Verifie si il a deja fait la presence aujourd hui
    // let query = `SELECT * FROM pt_presences pp WHERE DAY (NOW() ) = DAY (presence_date ) AND presence_user = ${req.decoded.user_id}`
    // let presenceDay = await sequelize.query(query, { type: QueryTypes.SELECT })
    // if (presenceDay.length > 0){
    //     return res.status(400).send({message:"Vous avez deja fait la presence journaliere"})
    // }
    let existingDate = await Presence.findOne({
        where: {
            [Op.and]:{
                presence_start_date: presence_start_date,
                presence_user: req.decoded.user_id
            }
           
        }
    })
    if (existingDate){
      await  Presence.update({
           presence_start_date,
           presence_end_date,
           presence_type
        },{
            where:{
                    id: existingDate.id
            }
        })
        return res.status(200).send({message:"Date mis a jour",status:"success"})
    }
    
    
    const savePresence = await Presence.create({
        presence_start_date: presence_start_date,
        presence_end_date: presence_end_date,
        presence_type: presence_type,
        presence_user: req.decoded.user_id,
    })
    if (savePresence){
        return res.status(200).send({status:"success",message:"Presence sauvgardee"})
    }
    else{
        res.status(400).send({status:"erreur",message:"Erreur de sauvgarde"})
    }
})


router.get('/presences/me',needAuth(),async(req,res)=>{
    const user = req.decoded
    let presences = await Presence.findAll({
        attributes: ['id',"presence_start_date","presence_end_date",['presence_type','title']],
        where:{
            presence_user: user.user_id
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
        attributes: [['presence_date','date'],['presence_type','title']],
        where:{
            presence_user: req.params.id
        }
    })
    if (presences){
        return res.status(200).send({status:"success",presences})
    }
    else{
        return res.status(400).send({status:"erreur",message:"Presences non trouvee"})
        
    }
})

router.put('/presence/:id',needAuth(),async(req,res)=>{
    let existingPresence = await Presence.findOne({
        where:{
           [Op.and]:{
            id: req.params.id ,
            presence_user: req.decoded.user_id
           }
        }
    })
    if (!existingPresence){
        return res.status(400).send({message: "Presence non trouvee",status:"erreur"})
    }
    let updatePresence = await Presence.update(
        req.body
        ,{
        where:{
            id:req.params.id
        }
    })
    if (updatePresence){
        return res.status(200).send({message:"Presence mis a jour",status:"success"})
    }
    else{
        return res.status(400).send({message:"Erreur de mis a jour",status:"erreur"})
    }

})

router.delete('/presence/:id',needAuth(),async(req,res)=>{
    let existingPresence = await Presence.findOne({
        where:{
           [Op.and]:{
            id: req.params.id ,
            presence_user: req.decoded.user_id
           }
        }
    })
    if (!existingPresence){
        return res.status(400).send({message: "Presence non trouvee",status:"erreur"})
    }
    let deletePresence = await Presence.destroy({
        where:{
            [Op.and]:{
                id: req.params.id ,
                presence_user: req.decoded.user_id
            }
        }
    })
    if (deletePresence){
        return res.status(200).send({message:"Presence supprimee",status:"success"})
    }
    else{
        return res.status(400).send({message:"Erreur de supression a jour",status:"erreur"})
    }

})
module.exports = router