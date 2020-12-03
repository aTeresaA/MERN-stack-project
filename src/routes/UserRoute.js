import UserController from '../controllers/UserController.js'

const userRoutes = (app) => {
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    app.get('/user/:userId', UserController.getUserById)
    app.get('/searchuser', UserController.getUserByUsernameQuery)
    // för att göra anrop på sökning i insomnia
    //http://localhost:3001/searchuser?username=berit eller valfritt username
    app.put('/user/:userId', UserController.updateUser)
    app.delete('/user/:userId', UserController.deleteUser)
}

export default {
    userRoutes
}