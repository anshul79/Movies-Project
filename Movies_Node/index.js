const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 8080;

// import { fetchData } from './fetchData.js'; // ECMAScript modules
const fetchData = require('./fetchData.js');

app.get('/getRegion', fetchData.getRegion);
app.get('/getPopular', fetchData.getPopular);
app.get('/getTopRated', fetchData.getTopRated);
app.get('/getUpcoming', fetchData.getUpcoming);
app.get('/getNowPlaying', fetchData.getNowPlaying);
app.get('/getMovieData/movieId', fetchData.getMovieData);
app.get('/getImages/movieId', fetchData.getImages);
app.get('/getVideos/movieId', fetchData.getVideos);
app.get('/getTrailer/movieId', fetchData.getTrailer);
app.get('/getRecommendations/movieId', fetchData.getRecommendations);
app.get('/getLatestMovies', fetchData.getLatestMovies);   // ?order=asec/desc
app.get('/', fetchData.getDefaultResponse);   // default response

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
