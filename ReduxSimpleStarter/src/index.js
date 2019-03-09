import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBo5mC-243igiJ4vijIjWBveM04eaj103k';



// Create a new component, This componnet should produce some html

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.videoSearch('sky');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }
  render(){
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
    return (
      // JSX, like HTML, produce HTML

        <div>
          <SearchBar onVideoSearchChange={(term) => videoSearch(term)}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
