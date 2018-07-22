function load_background_image(data) {
    let img = null,
        cr = null;
    if (!data.query.results) {
        // use default image
        let curr_url = window.location.href;
        img = curr_url.substr(0, curr_url.lastIndexOf("/")) + "/img/shells.jpg";
        cr = "user stux at https://pixabay.com/en/users/stux-12364/";
    } else {
        img = "https://www.bing.com" + data.query.results.json.images.url;
        cr = data.query.results.json.images.copyright;
    }

    console.debug('IMG is ' + img);
    // sort-of hack for figuring out when img is loaded
    // https://stackoverflow.com/questions/5057990/how-can-i-check-if-a-background-image-is-loaded
    $("<img/>").attr("src", img).on('load', function () {
        $(this).remove(); // prevent memory leaks as @benweet suggested
        $(".bg-image").css("background-image", "url(" + img + ")");
        // add copyring attribution at footer
        $("div.mastfoot > div.inner").text("Image copyright: " + cr);
        $("#cover").fadeOut(500);
        $(".bg-image").fadeTo(2000, 0.3);
    });
}


$(document).ready(function() {
    // Load up today"s image from bing front page
    // Implementation using https://blenderviking.github.io/2016/11/27/JavaScript-How-to-call-a-remote-service-with-using-a-JSONP-Proxy/
    // Using Yahoo query language as a CORS proxy
    var url = "https://query.yahooapis.com/v1/public/yql" +
        "?q=" + encodeURIComponent("select * from json where url='https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'") +
        "&format=json&callback=?";
   $.getJSON(url, load_background_image);
});
