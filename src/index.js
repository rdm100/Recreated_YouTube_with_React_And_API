import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDS9YRfldlJAEWpI_ptH2oLMqrHvwzHlxg';

// Create a new component. This component should create some HTML
class App extends Component {
	constructor (props){
		super (props);

		this.state =  {
			videos: [],
			selectedVideo: null
		};


		YouTube ({key: API_KEY, term: 'surfboards'}, (videos) => {
		console.log(videos);
		this.setState({videos: videos});
		});
	}
	render() {
			return (
	     <div>
	     	<SearchBar />
	     	<VideoDetail video={this.state.videos[0]} />
	     	<VideoList videos={this.state.videos} />
	     </div> // It looks like HTML but behind-the-scenes this HTML is just JavaScript, Babel/webpack Translates this for the browser into HTML
	    );
	}
}

// Take this component's generated HTML and put it on the page(In the DOM)
ReactDOM.render(<App/>, document.querySelector(".container"));

