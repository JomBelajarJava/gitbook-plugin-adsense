var injectAds = require('./injectAds');

module.exports = {
    hooks: {
        "page": injectAds
    }
};
