// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData}/>
//     </div>
//   </div>
// );


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      Videos: exampleVideoData
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer state={this.state} video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList state={this.state} videos={this.state.Videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
