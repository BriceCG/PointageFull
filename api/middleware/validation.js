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
    }
}