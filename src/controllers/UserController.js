import UserModel from '../models/UserModel.js'
import StatusCode from '../../config/StatusCode.js'

const createUser = async (req, res) => {

    const user = new UserModel({        
        username: req.body.username,
        password: req.body.password
    })

    try {
        const response = await user.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })        
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await UserModel.find()
        res.status(StatusCode.OK).send(response)    
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })        
    }  

}

const getUserById = async (req, res) => {
    try {
        const response = await UserModel.findById(req.params.userId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ 
            message: 'Ett fel inträffade i försöket att nå användare med id: ' + req.params.userId,
            error: error.message 
        })
    }
}

const getUserByUsernameQuery = async (req, res) => {
    try {
        const response = await UserModel.find({ username: req.query.username })
        response.length !== 0 
        ? res.status(StatusCode.OK).send(response)
        : res.status(StatusCode.NOT_FOUND).send({ message: 'Det gick inte att hitta en användare med användarnamnet ' + req.query.username })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ 
            message: 'Det gick inte att hitta en användare med användarnamnet ' + req.query.username,
            error: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        if(!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'Det går inte att uppdatera med tomma värden'})}
        const response = await UserModel.findByIdAndUpdate(req.params.userId, {
                username: req.body.username,
                password: req.body.password
        }, { new: true })

        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Något fel inträffade under uppdatering av användaren med id: ' + req.params.userId,
            error: error.message
        })        
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await UserModel.findByIdAndDelete(req.params.userId)
        res.status(StatusCode.OK).send({ 
            message: `Det gick bra att radera användare med användarnamn ${response.username}
            och med id ${req.params.userId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ 
            message: 'Det uppstod ett fel i försöket att radera användaren med id ' + req.params.userId,
            error: error.message
        })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsernameQuery,
    updateUser,
    deleteUser
}