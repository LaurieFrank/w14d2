import React from 'react';

const MusicChartList = (props) => {
  const options = props.musicCharts.map((music, index) => {
    return <option value={index}
    key={index}>{music.feed.entry[0]["im:name"].label}</option>
  })

  function handleChange(event){
    console.log(event.target.value);
    props.onMusicSelected(event.target.value)
  }

  return(
    <select id="music-chart-list"
    defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
  )
}
export default MusicChartList;
