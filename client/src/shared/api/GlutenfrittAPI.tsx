import Axios from 'axios';

const GlutenfrittAPI = Axios.create({
    baseURL: "http://localhost:3001"
})

export default GlutenfrittAPI;