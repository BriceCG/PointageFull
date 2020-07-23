const jwt = require('jsonwebtoken')
const { secret }= require('../config/jwtConfig')
module.exports = {
    validateUser: () => {
        return (req, res, next) => {
            const { user_username, user_password, user_role, user_etat,user_email } = req.body
            const user_departement_id = req.body.user_departement_id || null

            //Gestion des erreurs 
            let erreurs = []
            if (!user_email) {
                erreurs.push('Email vide')
            }
            if (!user_username) {
                erreurs.push('Nom d utilisateur vide')
            }
            if (!user_password) {
                erreurs.push('Mot de passe vide')
            }
            if (!user_role) {
                erreurs.push('Role vide')
            }
            if (!user_etat) {
                erreurs.push('Etat vide')
            }
            
            //Si il y a des erreurs
            if (erreurs.length > 0) {
                return res.status(400).send({ erreurs, status: "erreur" })
            }
            else{
                next()
            }
        }
    },
    validateSignUp: ()=>{
        return  (req,res,next)=>{
            const {user_nom,user_prenom,user_email,user_password,user_username} = req.body
            if (!user_nom) {
                return res.status(400).send({ message:"Nom vide", status: "erreur" })
            }
             if (!user_prenom) {
                return res.status(400).send({ message:"Email vide", status: "erreur" })
            }
             if (!user_email) {
                return res.status(400).send({ message:"Email vide", status: "erreur" })
            } 
             if (!user_password) {
                return res.status(400).send({ message:"Mot de passe vide", status: "erreur" })
            }
            
            else{
                next()
            }

        }
    },
    authValidation: ()=>{
        return async (req,res,next)=>{
            const {user_username,user_password} = req.body
            //Gestion des erreurs 
            let erreurs = []
            if (!user_username) {
                erreurs.push('Nom d utilisateur vide')
            }
            if (!user_password) {
                erreurs.push('Mot de passe vide')
            }
            if (erreurs.length > 0){
                return res.status(400).send({erreurs,status:"erreur"})
            }
            else{
                next()
            }
        }
    },
    presenceValidation: ()=>{
        return async (req,res,next)=>{
            const {presence_type} = req.body;
            if (!presence_type){
                return res.status(400).send({status:"erreur",message:"Presence vide"})
            }
            else{
                next()
            }
        }
    },
    societeValidation: ()=>{
        return (req,res,next)=>{
            const token = req.headers['x-api-key'];           
            if (!token){
                return res.status(400).send({message:"Token vide"})
            }

            
            let {societe_raison_social,societe_adresse_email} = req.body
            if (!societe_raison_social){
                return res.status(400).send({message:"Raison social ne doit pas etre vide"})
            }
            else if (!societe_adresse_email){
                return res.status(400).send({message:"Email ne doit pas etre vide"})
            }
            else{
                const decoded = jwt.decode(token,secret)
                if (decoded) {
                    req.decoded = decoded
                    next()
                }
                else{
                    return res.status(400).send({message:"Mauvais format du token",status:"erreur"})
                }
    
            }
        }
    }
}