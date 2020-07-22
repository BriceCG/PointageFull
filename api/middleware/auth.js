let jwt = require('jsonwebtoken');
const User = require('../Models/User')

module.exports = {
    needAuth: () => {
        return async (req, res, next) => {
            const token = req.headers['x-api-key']
            //Si pas de token
            if (!token) {
                return res.status(400).send({ message: "Pas de token" })
            }
            const decoded = jwt.decode(token, require('../config/jwtConfig').secret)
            if (decoded) {
                req.decoded = decoded
                next()
            }
            else {
                return res.status(400).send({ status: "erreur", message: "Token Invalide" })
            }
        }
    },
    needRole: (neededRole) => {
        return async (req, res, next) => {
            let role = req.decoded.user_role
            if (!role) {
                return res.status(400).send({ "message": "Pas de role", status: "erreur" })
            }
            role = role.toLowerCase()
            neededRole = neededRole.toLowerCase()
            if (role != neededRole) {
                return res.status(400).send({ "message": "Vous n avez pas de droit d acces a cette route", status: "erreur" })
            }
            else {
                next()
            }

        }
    },
    //Middleware pour verifier que le chef est dans le meme dep que l utilisateur
    needSameDepChef: () => {
        return async (req, res, next) => {
            const user = req.decoded
            user.user_role = user.user_role.toLowerCase()
            //Si l utilisateur est chef de departement
            if (user.user_role == 'drh') {
                return next()
            }
            const id = req.params.id
            //On prend l utilisateur present 
            let existingUser = await User.findOne({
                where: {
                    id: id
                }
            })
            if (existingUser) {
                //Si l utilisateur qui essaye d acceder a la route est chef et appartient au meme departement
                // console.log(existingUser.user_departement_id,user.user_departement_id)
                if (user.user_role == 'chef' && existingUser.user_departement_id == user.user_departement_id) {
                    return next()
                }
                else {
                    return res.status(400).send({ message: "Vous n avez pas de droit d acces a cette route", status: "erreur" })
                }
            }
            else {
                return res.status(400).send({ message: "Utilisateur non trouvee", status: "erreur" })
            }

        }
    }
}