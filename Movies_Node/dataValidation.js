const constants = require('./constants.js');

module.exports = class DataValidation {
    
    static validateType(type) {
        if(constants.TYPE_NAMES.indexOf(type) == -1) {
            return "";
        }
        return type;
    }

    static validateRegion(region) {
        if((typeof region) != 'string' || region.length != 2) {
            return "";
        }
        return region;
    }

    static validatePage(page) {
        if((typeof page) != 'string') {
            return 1;
        }
        return page;
    }

    static validateMovieId(movieId) {
        if((typeof movieId) != 'string') {
            return 1;
        }
        return movieId;
    }

    static validateMedia(media) {
        var media = media.split(',');
        for(var m in media) {
            if(constants.MEDIA_NAMES.indexOf(media[m]) == -1) {
                return "";
            }
        } 
        return media.join(',');
    }
}