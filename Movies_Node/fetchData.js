module.exports = class fetchData {
    static getRegion (req, res) {
        res.status(200).send("List of regions is here")
    }

    static getPopular(req, res) {
        res.status(200).send("Popular movies are here");
    }

    static getTopRated(req, res) {
        res.status(200).send("Top rated movies are here");
    }

    static getUpcoming(req, res) {
        res.status(200).send("Upcoming movies are here");
    }

    static getNowPlaying(req, res) {
        res.status(200).send("Now Playing moving are here");
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
