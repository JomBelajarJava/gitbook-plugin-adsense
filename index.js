var injectAds = require('./injectAds');

module.exports = {
    hooks: {
        "page": injectAds
    },
    book: {
        assets: './assets',
        js: [
            'adsense.js'
        ]
    }
};
