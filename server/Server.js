import express from 'express'
import dotenv from 'dotenv' // hidden variabels
import helmet from 'helmet' // disguise for headers
import morgan from 'morgan' // shows id for visitors
import bodyParser from 'body-parser' // use of nested objects
//import mongoose from 'mongoose'
import middlewares from './src/middlewares/Middlewares.js'
import Configuration from './config/Configuration.js'
import UserRoutes from './src/routes/UserRoute.js'

/* Startar inte med nodemon Server.js, 
   startar med npx nodemon */
   //npm start Server.js

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pannkakor! Glutenfria pannkakor är lika gott.')
    next()
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)