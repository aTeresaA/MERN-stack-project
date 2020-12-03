import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
    const databaseUrl = process.env.DATABASE_URL
    try {
        await 
        mongoose.connect(databaseUrl, 
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('framgångsrik kontakt med databasen')        
    } catch (error) {
        console.log('Fel uppstod vid försök till kontakt med databasen', error)
        process.exit()
    }
   
}

/*const connectToEdamam = async () => {
    const app_id = process.env.APP_ID
    const app_key = process.env.APP_KEY
    try {
        mongoose.connect((app_id && app_key),
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('inloggad i Edamam')
    } catch (err) {
        console.log('Det gick inte att logga in i Edamam API', error)
        process.exit()        
    }
}*/

const connectToPort = async (app) => {
    const port = process.env.PORT
    try {
        await
        app.listen(port, () => {
            console.log(`Servern är igång... på port ${port}`)
        })        
    } catch (error) {
        console.log('Servern startar inte')
        process.exit()        
    }
}

export default {
    connectToDatabase,
    connectToPort,
    //connectToEdamam
}