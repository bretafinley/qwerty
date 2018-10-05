// create a new component
// this component should produce some html
import ReactDom from 'react-dom';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = "AIzaSyAy3TDBodFXrnry6U9YQ13gM9b7fq-EPcY";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={(video)=>{ this.setState({selectedVideo: video}); }} videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated html and put it on the page (in the dom)
ReactDom.render(<App />, document.querySelector('.container'));