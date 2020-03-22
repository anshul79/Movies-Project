const axios = require('axios');

/**
 * Makes a GET request via axios
 */
module.exports.axiosRequestHandler = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
});
