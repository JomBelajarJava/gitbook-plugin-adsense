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
    page.content = topAds + page.content + bottomAds;
    return page;
}

module.exports = injectAds;
