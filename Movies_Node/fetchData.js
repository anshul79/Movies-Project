const axios = require('axios');

const api_key = 'b94995f446a2fd7af094ccd95b8cfc2b';
const language = 'en-US';

module.exports = class fetchData {
    static getRegions (req, res) {
        res.status(200).send("List of regions is here");
    }

    /**
     * API call for fetching movies of a certain type based on region
     * Url Param 'type' : Possible values - 'popular', 'top_rated', 'upcoming', 'now_playing'
     * Query Param 'region' (Optional): region code based on ISO 3166-1 alpha-2 format
     * * Query Param 'page' (Optional): page number for fetching movies
     * Example: http://localhost:8080/getMovies/popular?region=IN&page=2
     */
    static getMovies(req, res) {
        var type = req.params.type;
        var region = req.query.region;
        var page = req.query.page;
        console.log('Fetching ' + type + ' Movies of ' + region);
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
     * 'append_to_response' : Loads additional data like 'videos,images'
     * Example: http://localhost:8080/getMovieDetails/278
     */
    static getMovieDetails(req, res) {
        var movieId = req.params.movieId;
        var media = 'videos,images';
        console.log('Fetching detailed info of movie ' + movieId);
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

    static getTrailer(req, res) {
        res.status(200).send("Trailer for a movie is here");
    }

    static getRecommendations(req, res) {
        res.status(200).send("Recommendations for a movie are here");
    }

    static getLatestMovies(req, res) {
        res.status(200).send("Latest movies are here");
    }

    static getDefaultResponse(req, res) {
        res.status(200).send("Hello World");
    }
};
