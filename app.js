const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const secret = require('./api/config/jwtConfig').secret
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')


const cors = require('cors')
require('dotenv').config()

app.use(compression())

// Configuration CORS
 const corsOptions = {
    origin: 'http://localhost:5000/',
    optionsSuccessStatus: 200
 }
// app.use('*',cors(corsOptions),(req,res,next)=>{
//     next()
// })
app.use(cors('*'))

app.use(bodyParser.json())

const PORT = process.env.NODE_PORT 
const HOST = process.env.NODE_HOST

//add token for all requests
// app.use('*', (req, res, next) => {
//     const token = req.headers['x-token-key']
//     if (token == secret) {
//         next()
//     }
//     else {
//         return res.status(400).send({ message: "Unhautorized", status: "erreur" })
//     }
// })

app.use('', require('./api/controller/departement.controller'))
app.use('', require('./api/controller/user.controller'))
app.use('', require('./api/controller/auth.controller'))
app.use('', require('./api/controller/presence.controller'))
app.use('', require('./api/controller/mail.controller'))
app.use('',require('./api/controller/recuperation.controller'))
// app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

app.listen(PORT,HOST, () => {
    console.log('Serveur connecte au http://'+HOST+':'+ PORT)
})
