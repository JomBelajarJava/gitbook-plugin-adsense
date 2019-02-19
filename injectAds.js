var cheerio = require('cheerio');

var topAds = '<ins class="adsbygoogle" ' +
    'style="display:block" ' +
    'data-ad-client="ca-pub-8041854815282465" ' +
    'data-ad-slot="3348437430" ' +
    'data-ad-format="auto" ' +
    'data-full-width-responsive="true"></ins>';

var middleAds = '<ins class="adsbygoogle" ' +
    'style="display:block; text-align:center;" ' +
    'data-ad-layout="in-article" ' +
    'data-ad-format="fluid" ' +
    'data-ad-client="ca-pub-8041854815282465" ' +
    'data-ad-slot="6888829839"></ins>';

var bottomAds = '<ins class="adsbygoogle" ' +
    'style="display:block" ' +
    'data-ad-client="ca-pub-8041854815282465" ' +
    'data-ad-slot="8692155654" ' +
    'data-ad-format="auto" ' +
    'data-full-width-responsive="true"></ins>';

function injectAds(page) {
    var $ = cheerio.load(page.content);

    // Inject ads at the top and bottom of articles
    $.root()
        .prepend(topAds)
        .append(bottomAds);

    var h2 = $('h2');

    if (h2 && h2.length >= 2) {
        // Inject ads in the middle of articles before title
        h2
            .eq(h2.length / 2)
            .before(middleAds);
    }

    return $.root().html();
}

module.exports = injectAds;
