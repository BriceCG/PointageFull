let router = require('express').Router()
let nodemailer = require('nodemailer')
let generator = require('generate-password');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const { verifyMail,sendMail } = require('../service/mailService')



router.post('/verifyMail', async (req, res) => {
    const {user_email} = req.body
    verifyMail(user_email)
        .then(response => {
            if (response.status == 'success') {
                return res.status(200).send({ message: response.message })
            }
            else if (response.status == 'erreur') {
                return res.status(400).send({ message: response.message })
            }
        })
        .catch(err => {
            res.status(400).send({ err })
        })
})




module.exports = router
