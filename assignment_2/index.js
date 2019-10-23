const FIRST_NAME = "Dragomir";
const LAST_NAME = "Alexandru";
const GRUPA = "1075";


function initCaching() {

    cache = {
        home: 0,
        contact: 0,
        about: 0,
        //pageAccesCounter function
        pageAccessCounter: function () {
            if (arguments.length == 0) {
                cache.home++;
            } else if (typeof arguments[0] !== 'undefined') {
                if (arguments[0].toLowerCase() == 'about') {

                    cache.about++;
                } else if (arguments[0].toLowerCase() == 'contact') {
                    cache.contact++;
                }
            }
        },
        //getCache function
        getCache: function () {
            return cache;
        }
    }
    return cache;
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    initCaching
}