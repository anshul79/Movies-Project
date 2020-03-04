const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 8080;

// import { fetchData } from './fetchData.js'; // ECMAScript modules
const fetchData = require('./fetchData.js');

app.get('/getRegions', fetchData.getRegions);
app.get('/getMovies/:type', fetchData.getMovies);
app.get('/getMovieDetails/:movieId', fetchData.getMovieDetails);
app.get('/getRecommendations/:movieId', fetchData.getRecommendations);
app.get('/getLatestMovies', fetchData.getLatestMovies);   // ?order=asec/desc
app.get('/', fetchData.getDefaultResponse);   // default response

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
