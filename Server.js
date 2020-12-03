import express from 'express'
import dotenv from 'dotenv' // hidden variabels
import helmet from 'helmet' // disguise for headers
import morgan from 'morgan' // shows id for visitors
import bodyParser from 'body-parser' // use of nested objects
//import mongoose from 'mongoose'
import middlewares from './src/middlewares/Middlewares.js'
import Configuration from './config/Configuration.js'
import UserRoutes from './src/routes/UserRoute.js'
import RecipeRoutes from './src/routes/RecipeRoute.js'
import cors from 'cors'
//import { Mongoose } from 'mongoose'

/* Startar inte med nodemon Server.js, 
   startar med npx nodemon */
   //node Server.js

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())
//app.use(cors({ credentials: true }))

/*mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/glutenfrittdb",
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
    () => {
        console.log('connected to db, kopplad till db')
    }
)*/


app.get('/pannkaka', (req, res) => {
    res.send('Pannkakor! Glutenfria pannkakor är lika gott.')
    next()
})

app.get('/cors', (req, res, next) => {
        res.json({ msg: 'This is CORS-enabled for all origins! Tjohooo!' })
    })

/*const PORT = process.env.PORT || 8080

if(process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"))
}*/

app.use(express.static("client/build"))

UserRoutes.userRoutes(app)
RecipeRoutes.recipeRoutes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app