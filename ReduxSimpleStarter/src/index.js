/**
 * Created by luisfediaz on 5/04/17.
 */





import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = "AIzaSyBtcWMQqy9r31_8nXNa4_zSLDXCJFb-FuM";




class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('vue.js')

    }

    videoSearch(term){

        YTSearch( { key: API_KEY , term: term },
            (videos) => {this.setState({
                videos:videos,
                selectedVideo: videos[0]
            })} //sintaticamente sugar
        );

    }


    render() {

        const videoSearchD = _.debounce((term) => {this.videoSearch(term)} , 300);
    return (
        <div>
            <SearchBar onSearchTermChange= {videoSearchD}/>
            <VideoDetail video= {this.state.selectedVideo}  />
            <VideoList
                onVideoSelect = { selectedVideo => this.setState({selectedVideo: selectedVideo})}
                videos={this.state.videos}/>
        </div>
            );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
