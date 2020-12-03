import RecipeController from '../controllers/RecipeController.js'

const recipeRoutes = (app) => {
    app.post('/recipe', RecipeController.createRecipe)
    app.get('/recipe', RecipeController.getAllRecipes)
    app.get('/recipe/:recipeId', RecipeController.getRecipeById)
    app.get('/searchrecipe', RecipeController.getRecipeByTitleQuery)
    // för att göra anrop på sökning i insomnia
    //http://localhost:3001/searchrecipe?title=xxxx eller valfritt recept
    app.put('/recipe/:recipeId', RecipeController.updateRecipe)
    app.delete('/recipe/:recipeId', RecipeController.deleteRecipe)
}

export default {
    recipeRoutes
}