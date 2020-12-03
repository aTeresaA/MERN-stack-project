import mongoose from 'mongoose'

const RecipeSchema = mongoose.Schema(
    {
        title: String,
        description: String       
    },
    { timestamps: true }
)

const RecipeModel = mongoose.model('recipe', RecipeSchema)

export default RecipeModel