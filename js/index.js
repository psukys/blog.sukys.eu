function load_background_image(data) {
    var img = data.query.results.json.images;
    $("body").css("background-image", "url(http://www.bing.com" + img.url + ")");
    // add copyring attribution at footer
    $("div.mastfoot > div.inner").text("Image copyright: " + img.copyright);
}


$(document).ready(function() {
    // Load up today's image from bing front page
    // Implementation using https://blenderviking.github.io/2016/11/27/JavaScript-How-to-call-a-remote-service-with-using-a-JSONP-Proxy/
    // Using Yahoo query language as a CORS proxy
    var url = 'https://query.yahooapis.com/v1/public/yql' +
        '?q=' + encodeURIComponent('select * from json where url=@url') +
        '&url=' + encodeURIComponent('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1') +
        '&format=json&callback=?';
    $.getJSON(url, load_background_image);
    // add copyright attribution at footer
});