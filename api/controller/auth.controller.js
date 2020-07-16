let router = require('express').Router()
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')


const User = require('../Models/User')
const { needAuth } = require('../middleware/auth')

router.post('/login',require('../middleware/validation').authValidation(),async(req,res)=>{
    const {user_username,user_password} = req.body
    

    //Trouver l utilisateur correspondant

    let existingUser = await User.findOne({
        attributes: ['id','user_username','user_role','user_etat','user_departement_id','user_password'],
        where:{
            user_username
        }
    })
    //Si l utilisateur n est pas dans la base de donnee
    if (!existingUser){
        return res.status(400).send({message:"Utilisateur non trouvee",status:"erreur"})
    }
    
    //Si l utilisateur est dans la base de donne
    //Verifier si le mot de passe correspond
    let samePassword = await bcrypt.compare(user_password,existingUser.user_password)
    if (samePassword){
        //Si le mot de passe correspond on signe le token
        const token = await jwt.sign({
            user_id: existingUser.id,
            user_username: existingUser.user_username,
            user_role: existingUser.user_role,
            user_etat: existingUser.user_etat,
            user_departement_id: existingUser.user_departement_id
        },require('../config/jwtConfig').secret)
        
        return res.status(200).send({message:"Login reussi",status:"success",token,user_username,user_role:existingUser.user_role})
    }
    else{
        return res.status(400).send({message:"Le mot de passe ne correspond pas",status:"erreur"})
    }

})
router.get('/me',needAuth(),(req,res)=>{
    return res.status(200).send({user:req.decoded})
})

module.exports = router
