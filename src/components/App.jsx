class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {},
      Videos: [],
      cb: this.updateVideo.bind(this),
      searchOk: true,
      searchFunc: this.userSearch.bind(this)
    };
  }

  render() {
    if (this.state.Videos.length === 0) {
      return (<div></div>);
    }
    return (
      <div>
        <Nav state={this.state} />
        <div className="col-md-7">
          <VideoPlayer state={this.state} video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList state={this.state} videos={this.state.Videos}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var context = this;

    searchYouTube({}, function(arr) {
      context.setState({
        currentVideo: arr[0],
        Videos: arr
      });

      context.render();
    });
  }

  updateVideo(id) {
    for (let video of this.state.Videos) {
      if (id === video.id.videoId) {
        this.setState({currentVideo: video});
        this.render();
      }
    }
  }
  timer() {
    var context = this;
    setTimeout(function() {
      context.setState({searchOk: true});
    }, 500);
  }

  userSearch(string) {
    if (this.state.searchOk) {
      console.log(string);
      var context = this;
      searchYouTube({query: string}, function(items) {
        context.setState({Videos: items});
        context.render();
      });
      this.setState({searchOk: false});
      this.timer();
    }
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
