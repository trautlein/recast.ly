var searchYouTube = (options, callback) => {
  var mySearch = {};
  mySearch.key = options.key;
  mySearch.q = options.query;
  mySearch.maxResults = options.max;
  $.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true', mySearch, function (data) {
    console.log(data.items);
    return callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
