
let nodemailer = require('nodemailer')
let generator = require('generate-password');

let Verify = require('email-verifier')
const verify = new Verify(require('../config/mail').validateMail)

require('dotenv').config()

module.exports = {
    verifyMail: async (email) => {
        return new Promise((resolve, reject) => {
            if (!email){
                reject("Email vide")
            }
            verify.verify(email, (err, info) => {
                if (err){
                    reject(err)
                }
                if (info.formatCheck == 'true' && info.smtpCheck == 'true') {
                    resolve({status:"success",message:"Email correct"})
                }
                else {
                    resolve({status:"erreur",message:"Email invalide"})
                }
            })
        })
    },

    sendMail:async(expediteur,destinataire,password)=>{
        let mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD
            }
        })
        const text = "Your new password is "+password
        const mailOptions = {
            from: expediteur,
            to: destinataire,           
            text: text
        }
        var sendMail = await mail.sendMail(mailOptions)
        if (sendMail) {
            return {status:"success",message:"Mail envoye"}
        }
        else {
            return {status:"erreur",message:"Erreur d envoie"}
        }
    },
    generatePassword:()=>{
        var password = generator.generate({
            length: 10,
            numbers: true
        })
        return password
    }
}