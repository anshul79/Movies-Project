const axios = require('axios');
const countryList = require('country-list');
const constants = require('./constants.js');
const DataValidation = require('./dataValidation.js');

const api_key = constants.API_KEY;
const language = constants.LANGUAGE;

module.exports = class MoviesData {

    /**
     * API call to fetch the list of all countries with their codes
     */
    static getRegions (req, res) {
        var list = countryList.getNameList();
        console.log('Fetching all countries with codes');
        res.status(200).send(list);
    }

    /**
     * API call for fetching movies of a certain type based on region
     * Url Param 'type' : Possible values - 'popular', 'top_rated', 'upcoming', 'now_playing'
     * Query Param 'region' (Optional): region code based on ISO 3166-1 alpha-2 format
     * Query Param 'page' (Optional): page number for fetching movies
     * Example: http://localhost:8080/getMoviesList/popular?region=IN&page=2
     */
    static getMoviesList(req, res) {
        var type = DataValidation.validateType(req.params.type);
        var region = DataValidation.validateRegion(req.query.region);
        var page = DataValidation.validatePage(req.query.page);
        console.log('Fetching ' + type + ' movies of ' + region + ' at page ' + page);
        axios.get('https://api.themoviedb.org/3/movie/' + type, {
            params: {
                api_key,
                language,
                region,
                page
            }
        })
        .then(function(resp) {
            res.status(200).send(resp.data);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    /**
     * API call for fetching detailed info of movie based on id
     * Url Param 'movieId' : Accepts an integer value
     * Query Param 'media' (Optional): Comma separated values, e.g. 'videos,images'
     * Example: http://localhost:8080/getMovieDetails/278?media=videos,images
     */
    static getMovieDetails(req, res) {
        var movieId = DataValidation.validateMovieId(req.params.movieId);
        var media = DataValidation.validateMedia(req.query.media);
        console.log('Fetching detailed info of movie ' + movieId + ' with ' + media);
        axios.get('https://api.themoviedb.org/3/movie/' + movieId, {
            params: {
                api_key,
                language,
                append_to_response: media
            }
        })
        .then(function(resp) {
            res.status(200).send(resp.data);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    /**
     * API call for fetching recommendations for movie based on id
     * Url Param 'movieId' : Accepts an integer value
     * Query Param 'page' (Optional): page number for fetching recommendations
     * Example: http://localhost:8080/getRecommendations/278?page=2
     */
    static getRecommendations(req, res) {
        var movieId = DataValidation.validateMovieId(req.params.movieId);
        var page = DataValidation.validatePage(req.query.page);
        console.log('Fetching recommendations for movie ' + movieId + ' at page ' + page);
        axios.get('https://api.themoviedb.org/3/movie/' + movieId + '/recommendations', {
            params: {
                api_key,
                language,
                page
            }
        })
        .then(function(resp) {
            res.status(200).send(resp.data);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    static getLatestMovies(req, res) {
        res.status(200).send("Latest movies are here");
    }

    static getDefaultResponse(req, res) {
        res.status(200).send("Hello World");
    }
};
