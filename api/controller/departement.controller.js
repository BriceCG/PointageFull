let router = require('express').Router()
let Departement = require('../Models/Departement')

router.get('/departements', async (req, res) => {
    let departements = await Departement.findAll()
    return res.status(200).send({ departements, result: "success" })
})

router.post('/departement', async (req, res) => {
    const { departement_nom } = req.body
    if (!departement_nom) {
        return res.status(400).send({ message: "Pas de nom de departement", status: "erreur" })
    }
    let createDepartement = await Departement.create({
        departement_nom: departement_nom
    })
    if (createDepartement) {
        return res.status(200).send({ message: "Departement sauvgardee", status: "success" })
    }
    else {
        return res.status(400).send({ message: "Erreur de sauvegarde", status: "erreur" })
    }

})

router.get('/departement/:id', async (req, res) => {
    const id = req.params.id
    let departement = await Departement.findOne({
        where: {
            id: id
        }
    })
    if (departement) {
        return res.status(200).send({ departement, status: "success" })
    }
    else {
        return res.status(400).send({ message: "Departement non trouvee", status: "erreur" })
    }
})

router.put('/departement/:id', async (req, res) => {
    const id = req.params.id
    const { departement_nom } = req.body
    const departement_chef_id = req.body.departement_chef_id || null
    let departement = await Departement.findOne({
        where: {
            id: id
        }
    })
    if (!departement) {
        return res.status(400).send({ message: "Departement non trouvee", status: "erreur" })
    }
    const updateDep = await Departement.update({
        departement_nom: departement_nom,
        departement_chef_id: departement_chef_id
    }, {
        where: {
            id: id
        }
    })

    if (updateDep) {
        return res.status(200).send({ message: "Departement mis a jour", status: "success" })
    }
    else {
        return res.status(400).send({ message: "Erreur de mis a jour", status: "erreur" })
    }
})

module.exports = router;