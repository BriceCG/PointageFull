let router = require('express').Router()
let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')
require('dotenv').config()

//Models
const User = require('../Models/User')
const Recuperation = require('../Models/Recuperation')

//Middleware
const {needAuth,needRole}  =require('../middleware/auth')

//Service
const {generatePassword,sendMail} = require('../service/mailService')

//JWT secret
const {secret} = require('../config/jwtConfig')

router.post('/recuperation', async (req, res) => {
    const { user_email } = req.body;
    if (!user_email) {
        return res.status(400).send({ message: "L email est vide est  vide", status: "erreur" })
    }
    //Verification si le nom d utilisateur est dans la base de donnee
    const existingUser = await User.findOne({
        where: {
            user_email: user_email
        }
    })
    //Si l utilisateur n est pas dans la base 
    if (!existingUser) {
        return res.status(400).send({ message: "Votre nom d utilisareur ne correspond pas" })
    }
    //Verification si il ya deja une recup dans la base a l utilisateur
    const existingRecuperation = await Recuperation.findOne({
        where:{
            recup_user: existingUser.id
        }
    })
    if (existingRecuperation){
        return res.status(400).send({message:"Demande de recuperation envoye a l admin",status:"success"})
    }

    //Creation de la recuperation
    let newRecuperation = await Recuperation.create({
        recup_user: existingUser.id,
        recup_etat: 'demande'
    })
    if (newRecuperation){
        return res.status(400).send({message:"Demande de recuperation envoye a l admin",status:"success"})
    }
    else{
        return res.status(400).send({message:"Erreur de demande",status:"erreur"})
    }
})

router.get('/recuperations',needAuth(),needRole('admin'),async(req,res)=>{
    const recuperations = await Recuperation.findAll({
         raw:true
    })
    let recuperationArray = []
    for (recuperation of recuperations){
        console.log(recuperation.recup_user)
        let recuperationObj = {}
        let user = await User.findOne({
            attributes: ['user_username'],
            where:{
                id:  recuperation.recup_user
            }
        })
        console.log(user.user_username)
        recuperationObj.id = recuperation.id
        recuperationObj.recup_user = user.user_username
        recuperationObj.link = `http://${process.env.NODE_HOST}:${process.env.NODE_PORT}/sendRecuperation/${recuperation.id}`
        recuperationArray.push(recuperationObj)
    }
    if (recuperations){
        return res.status(200).send({recuperationArray,status:"success"})
    }
    else{
        return res.status(400).send({status:"erreur"})
    }
})
router.get('/sendRecuperation/:id', needAuth(),needRole('admin'),async (req, res) => {
    const id= req.params.id
    //Trouver la recuperation
    const recuperation = await Recuperation.findOne({
        where:{
            id:id
        }
    })
    if (!recuperation){
        return res.status(400).send({message:"Recuperation non trouve",status:"erreur"})
    }

    //Trouver le mail de l utilisateur
    const user = await User.findOne({
        where:{
            id:recuperation.recup_user
        }
    })
    if (!user){
        return res.status(400).send({message:"Utilisateur non trouve",status:"erreur"})
    }

    const admin = req.decoded
    const password = generatePassword()
    const {status,message} = await sendMail(admin.user_email,user.user_email,password)
    if (status == "success"){
        //sign token
        let token = await jwt.sign({
            password: password,
            user_email: user.user_email
        },secret,{
            expiresIn: '1h'
        })
        //Update recuperation
        const updateRecuperation = await Recuperation.update({
            recup_token: token
        },{
            where:{
                id:id
            }
        })
        if (updateRecuperation){
            return res.status(200).send({message,status})
        }   
        else{
            return res.status(400).send({message:"erreur de sauvegarde"})
        }
    }
    else if (status == "erreur"){
        return res.status(400).send({message,status})
    }
})

router.post('/confirmPassword',async(req,res)=>{
    const {new_password,user_email} = req.body;
    //Recherche de l utilisateur
    const user = await User.findOne({
        where:{
            user_email: user_email
        }
    })
    if (!user){
        return res.status(400).send({message:"Utilisateur non trouve",status:"erreur"})
    }
    //Recherche de la recuperation
    let recuperation = await Recuperation.findOne({
        where:{
            recup_user:user.id
        }
    })

    if (!recuperation){
        return res.status(400).send({message:"Recuperation non trouve",status:"erreur"})
    }

    //On decode le mot de passe transformee en token
    const decodeToken = jwt.decode(recuperation.recup_token,secret)
    const tokenPassword = decodeToken.password
    // const tokenEmail = decodeToken.user_email

    //On compare le mot de passe
    if (tokenPassword == new_password){
        
        //On crypte le nouveau mdp
        let hashPassword = await bcrypt.hash(tokenPassword,10)
        //On met a jours l utilisateur
        let updateUser = await User.update({
            user_password:hashPassword
        },{
            where:{
                user_email:user_email
            }
        })

         //On supprime la recuperation
        let deleteRecuperation = await Recuperation.destroy({
            where:{
                id: recuperation.id
            }
        })

       
        if (deleteRecuperation && updateUser){
            return res.status(200).send({message:"Mot de passe mis a jour",status:"success"})
        }

    }
    else{
        return res.status(400).send({status:"erreur",message:"Mot de passe ne correcspond pas"})
    }
})

module.exports = router