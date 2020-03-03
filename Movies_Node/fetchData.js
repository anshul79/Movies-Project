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
     * Query Param 'region': region code based on ISO 3166-1 alpha-2 format
     * Example: http://localhost:8080/getMovies/popular?region=IN
     */
    static getMovies(req, res) {
        var type = req.params.type;
        var region = req.query.region;
        console.log('Fetching ' + type + ' Movies of ' + region);
        axios.get('https://api.themoviedb.org/3/movie/' + type, {
            params: {
                api_key,
                language,
                region
            }
        })
        .then(function(resp) {
            res.status(200).send(resp.data);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    static getMovieData(req, res) {
        res.status(200).send("The detailed movie info is here");
    }

    static getImages(req, res) {
        res.status(200).send("Images for a movie are here");
    }

    static getVideos(req, res) {
        res.status(200).send("Videos for a movie are here");
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
