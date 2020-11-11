import UserController from '../controllers/UserController.js'

const routes = (app) => {
    app.post('/user', UserController.createUser)
}

export default {
    routes
}