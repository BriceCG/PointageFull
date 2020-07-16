let router = require('express').Router()
let nodemailer = require('nodemailer')

router.post('/sendMail',async(req,res)=>{
    let mail = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'briceainarivonyraharijaona@gmail.com',
            pass: 'hopepeace33'
        }
    })
    const mailOptions = {
        to : 'briceainarivonyraharijaona@gmail.com',
        from: 'swvilfsclegqkcqufd@awdrt.com',
        text: 'Hello world'
    }
    var sendMail = await mail.sendMail(mailOptions)
    if (sendMail){
        return res.status(200).send({message:"Mail sent"})
    }
    else{
        return res.status(400).send({erreur})
    }
})
module.exports = router
