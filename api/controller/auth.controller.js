const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {Op} = require('sequelize')


const User = require('../Models/User')
//Middleware
const { needAuth } = require('../middleware/auth')
const { authValidation, validateSignUp } = require('../middleware/validation')

//Sevices
const { containSubstring, removeBlankSpace } = require('../service/stringService')

router.post('/login', require('../middleware/validation').authValidation(), async (req, res) => {
    let { user_username,user_password } = req.body
    //Suppression des escpaces vide
    user_password = removeBlankSpace(user_password)

    //Trouver l utilisateur correspondant

    let existingUser = await User.findOne({
        attributes: ['id', 'user_username', 'user_role', 'user_etat', 'user_departement_id', 'user_password'],
        where: {
            [Op.or]:{
                user_username: user_username,
                user_email: user_username
            }
        }
    })
    //Si l utilisateur n est pas dans la base de donnee
    if (!existingUser) {
        return res.status(400).send({ message: "Utilisateur non trouvee", status: "erreur" })
    }
    console.log(user_password)
    //Si l utilisateur est dans la base de donne
    //Verifier si le mot de passe correspond
    let samePassword = await bcrypt.compare(user_password, existingUser.user_password)
    if (samePassword) {
        //Si le mot de passe correspond on signe le token
        const token = await jwt.sign({
            user_id: existingUser.id,
            user_username: existingUser.user_username,
            user_role: existingUser.user_role,
            user_etat: existingUser.user_etat,
            user_departement_id: existingUser.user_departement_id
        }, require('../config/jwtConfig').secret)

        return res.status(200).send({ message: "Login reussi", status: "success", token, user_username, user_role: existingUser.user_role })
    }
    else {
        return res.status(400).send({ message: "Le mot de passe ne correspond pas", status: "erreur" })
    }

})
router.get('/me', needAuth(), (req, res) => {
    return res.status(200).send({ user: req.decoded })
})

router.post('/signUp', validateSignUp(), async (req, res) => {

    let { user_nom,user_username, user_prenom, user_email, user_password } = req.body
    //Verification de la longeur du mot de passe
    user_password = removeBlankSpace(user_password)
    if (user_password.length < 6) {
        return res.status(400).send({ message: "Le mot de passe ne doit pas etre inferieur a 6 caracteres" })
    }

    //Verification si le nom d utilisateur est deja utilise
    let existingUser = await User.findOne({
        where: {
            [Op.or]:{
                user_email,
                user_username
            }
            
        }
    })
    if (existingUser) {
        return res.status(400).send({ message: "Utilisateur deja dans la base de donne", status: "erreur" })
    }
    //Hash du mot de passe
    let hashPassword = await bcrypt.hash(user_password, 10)
    req.body.user_password = hashPassword
    let saveUser = await User.create(req.body)

    const token = await jwt.sign({
        user_email
    },require('../config/jwtConfig').secret)
    //Sauvegarde de l utilisateur
    if (saveUser) {
        return res.status(200).send({ message: "User sauvgardee", status: "success",token:token })
    }
    else {
        return res.status(400).send({ message: "Erreur de sauvgarde", status: "erreur" })
    }

})

module.exports = router
