const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 8080;

// import { MoviesData } from './moviesData.js'; // ECMAScript modules
const MoviesData = require('./moviesData.js');

app.get('/getRegions', MoviesData.getRegions);
app.get('/getMoviesList/:type', MoviesData.getMoviesList);
app.get('/getMovieDetails/:movieId', MoviesData.getMovieDetails);
app.get('/getRecommendations/:movieId', MoviesData.getRecommendations);
app.get('/getLatestMovies', MoviesData.getLatestMovies);   // ?order=asec/desc
app.get('/', MoviesData.getDefaultResponse);   // default response

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
