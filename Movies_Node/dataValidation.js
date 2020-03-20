const constants = require('constants.js');

module.exports = class DataValidation {
    
    static validateType(type) {
        if(constants.TYPE_NAMES.indexOf(type) == -1) {
            return "";
        }
        return type;
    }

    static validateRegion(region) {
        if(typeOf(region) != String || region.size() != 2) {
            return "";
        }
        return region;
    }

    static validatePage(page) {
        if(typeOf(page) != Number) {
            return 1;
        }
        return page;
    }

    static validateMovieId(movieId) {
        if(typeOf(movieId) != Number) {
            return 1;
        }
        return movieId;
    }

    static validateMedia(media) {
        if(constants.MEDIA_NAMES.indexOf(media) == -1) {
            return "";
        }
        return media;
    }
}