import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
    const databaseUrl = process.env.DATABASE_URL
    try {
        await 
        mongoose.connect(databaseUrl, 
        { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('framgångsrik kontakt med databasen')        
    } catch (error) {
        console.log('Fel uppstod vid försök till kontakt med databasen', error)
        process.exit()
    }
   
}

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
    connectToPort
}