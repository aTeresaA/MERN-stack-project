import RecipeModel from '../models/RecipeModel.js'
import StatusCode from '../../config/StatusCode.js'

const createRecipe = async (req, res) => {

    const recipe = new RecipeModel({        
        title: req.body.title,
        description: req.body.description
    })

    try {
        const response = await recipe.save()
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })        
    }
}

const getAllRecipes = async (req, res) => {
    try {
        const response = await RecipeModel.find()
        res.status(StatusCode.OK).send(response)    
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })        
    }  

}

const getRecipeById = async (req, res) => {
    try {
        const response = await RecipeModel.findById(req.params.recipeId)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ 
            message: 'Ett fel inträffade i försöket att nå recept med id: ' + req.params.recipeId,
            error: error.message 
        })
    }
}

const getRecipeByTitleQuery = async (req, res) => {
    try {
        const response = await RecipeModel.find({ title: req.query.title })
        response.length !== 0 
        ? res.status(StatusCode.OK).send(response)
        : res.status(StatusCode.NOT_FOUND).send({ message: 'Det gick inte att hitta receptrubriken ' + req.query.title })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ 
            message: 'Det gick inte att hitta receptet med rubriken ' + req.query.title,
            error: error.message
        })
    }
}

const updateRecipe = async (req, res) => {
    try {
        if(!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'Det går inte att uppdatera med tomma värden'})}
        const response = await RecipeModel.findByIdAndUpdate(req.params.recipeId, {
                title: req.body.title,
                description: req.body.description
        }, { new: true })

        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Något fel inträffade under uppdatering av receptet med id: ' + req.params.recipeId,
            error: error.message
        })        
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const response = await RecipeModel.findByIdAndDelete(req.params.recipeId)
        res.status(StatusCode.OK).send({ 
            message: `Det gick bra att radera receptet med rubriken ${response.title}
            och med id ${req.params.recipeId}`
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ 
            message: 'Det uppstod ett fel i försöket att radera receptet med id ' + req.params.recipeId,
            error: error.message
        })
    }
}

export default {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    getRecipeByTitleQuery,
    updateRecipe,
    deleteRecipe
}