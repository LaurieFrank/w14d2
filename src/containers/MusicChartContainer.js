import React from 'react';
import MusicChartList from '../components/MusicChartList';
import MusicChartDetail from '../components/MusicChartDetail';

class MusicChartContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      musicCharts: [],
      currentMusic: null
    };
    this.handleMusicSelected = this.handleMusicSelected.bind(this)
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(musicCharts => this.setState({musicCharts: musicCharts}))
      .catch(err => console.error);
  }

  handleMusicSelected(index){
    const selectedMusic = this.state.musicCharts[index];
    this.setState({currentMusic: selectedMusic});
  }

  render(){
    return(
      <div>
        <h2>Top 20 Songs</h2>
        <MusicChartList
          musicCharts={this.state.musicCharts}
          onMusicSelected={this.handleMusicSelected}
        />
        <MusicChartDetail
        music={this.state.currentMusic}/>
      </div>
    );
  }
}

export default MusicChartContainer;
