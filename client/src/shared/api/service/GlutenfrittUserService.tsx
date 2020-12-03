import http from '../GlutenfrittAPI';

const getAllUsers = () => {
    return http.get('/user')
}

export default {
    getAllUsers
}