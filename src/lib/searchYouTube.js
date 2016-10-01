var searchYouTube = (options, callback) => {
  callback = (callback ? callback : function(e) {
    return e;
  });
  var mySearch = {};
  mySearch.key = options.key ? options.key : YOUTUBE_API_KEY;
  mySearch.q = options.query;
  mySearch.maxResults = options.max ? options.max : 5;
  $.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true', mySearch, function (data) {
    // console.log(data.items);
    return callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
