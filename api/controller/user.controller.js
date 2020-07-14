let router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../Models/User')
const findOne = require('../middleware/modelFunc').findOne
const inDataBase = require('../middleware/inDataBase').inDatabase
const { Op } = require('sequelize')


const { needRole, needAuth } = require('../middleware/auth')

router.post('/user', require('../middleware/validation').validateUser(), async (req, res) => {
    const { user_username, user_password, user_role, user_etat } = req.body
    const user_departement_id = req.body.user_departement_id || null

    //Verification si le nom d utilisateur est deja utilise
    const options = {
        user_username: user_username
    }
    let existingUser = await inDataBase(User, options)
    if (existingUser) {
        return res.status(400).send({ message: "Utilisateur deja dans la base de donne", status: "erreur" })
    }
    //Si pas d erreur
    //Cryptage du mot de passe
    let hashPassword = await bcrypt.hash(user_password, 10)
    let saveUser = await User.create({
        user_username: user_username,
        user_password: hashPassword,
        user_role: user_role,
        user_departement_id: user_departement_id,
        user_etat: user_etat
    })
    if (saveUser) {
        return res.status(200).send({ message: "User sauvgardee", status: "success" })
    }
    else {
        return res.status(400).send({ message: "Erreur de sauvgarde", status: "erreur" })
    }
})
router.get('/users',async (req, res) => {
    let users = await User.findAll()
   
    if (users) {
        return res.status(200).send({ users, status: "success" })
    }
    else {
        return res.status(400).send({ status: "erreur" })
    }
})

router.get('/user/:id', async (req, res) => {
    const attributes = ['id', 'user_username', 'user_role', 'user_etat', 'user_departement_id']
    let existingUser = await findOne(User, req.params.id, attributes)
    if (existingUser) {
        return res.status(200).send({ existingUser, status: "success" })
    }
    else {
        return res.status(400).send({ message: "Utilisateur non trouve", status: "erreur" })
    }
})

router.put('/user/:id', require('../middleware/validation').validateUser(), async (req, res) => {
    const { user_username, user_password, user_etat, user_role } = req.body
    const user_departement_id = req.body.user_departement_id || null
    //Verification si l utilisateur est dans la base de donnee
    let existingUser = await inDataBase(User, { id: req.params.id })
    if (!existingUser) {
        return res.status(400).send({ message: "Utilisateur non trouvee", status: "erreur" })
    }

    //Verification si le nom d utilisateur est dans la base de donnee

    existingUser = await User.findOne({
        where: {
            [Op.and]: {
                user_username: user_username,
                [Op.not]: {
                    id: req.params.id
                }
            }
        }
    })
    if (existingUser) {
        return res.status(400).send({ message: "Utilisateur deja dans la base de donne", status: "erreur" })
    }

    let hashPassword = await bcrypt.hash(user_password, 10)
    let updateUser = await User.update({
        user_username,
        user_password: hashPassword,
        user_etat,
        user_departement_id,
        user_role,
    }, {
        where: {
            id: req.params.id
        }
    })
    if (updateUser) {
        return res.status(200).send({ message: "Utilisateur mis a jour", status: "success" })
    }
    else {
        return res.status(400).send({ status: "erreur" })
    }

})

router.get('/me/users', needAuth(), needRole('chef'), async (req, res) => {
    const user = req.decoded
    let users = await User.findAll({
        attributes: ['id','user_username','user_role','user_etat'],
        where: {
            [Op.and]:{
                user_departement_id: user.user_departement_id,
                [Op.not]:{
                    id: req.decoded.user_id
                }
            }
        }
    })
    if (users) {
        return res.status(200).send({users,status: "success"})
    }
    else{
        return res.status(400).send({message:"Utilisateurs non trouvees",status:"erreur"})
    }
})

module.exports = router
