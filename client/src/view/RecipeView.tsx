import React, { useState } from 'react';
import GlutenfrittRecipeService from '../shared/api/service/GlutenfrittRecipeService'

export const Recipeview = () => {       
    const [recipe, setRecipe] = useState<any[]>([])
    
    const getRecipesFromBackend = async () => {
       const response = await GlutenfrittRecipeService.getAllRecipes()
       setRecipe(response.data)
       //console.log(response)
   }
   
    return (
        
        <div>             
            {recipe.map(recipe => (
                <div key={recipe._id}>                    
                    <h3>{recipe.title}</h3>
                    <h4>{recipe.description}</h4>
                </div>                
            ))}
            <button onClick={() => getRecipesFromBackend()}>Hämta recept</button>

            <h1>Det här är Recipeview</h1><br /><h2>Många fina glutenfria recept, namnamnam.</h2>
            <h3>Här får alla ta del av glutenfria recept,<br />
            men för att dela med sig av recept måste du vara inloggad.</h3>
        </div>
        
    )
}