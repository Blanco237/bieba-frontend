import axios from "axios";


const API = axios.create({
    baseURL: 'https://bieba-backend.onrender.com',
})

export default API;