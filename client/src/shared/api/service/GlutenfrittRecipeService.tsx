import http from '../GlutenfrittAPI';

const getAllRecipes = () => {
    return http.get('/recipe')
}

export default {
    getAllRecipes
}