const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')


const cors = require('cors')
require('dotenv').config()

app.use(compression())
app.use(cors('*'))
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000


app.use('',require('./api/controller/departement.controller'))
app.use('',require('./api/controller/user.controller'))
app.use('',require('./api/controller/auth.controller'))
app.use('',require('./api/controller/presence.controller'))
// app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.listen(PORT,()=>{
    console.log('Serveur connecte au http://localhost:'+PORT)
})
