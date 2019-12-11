import React from 'react';

const MusicChartDetail = (props) => {
  if(!props.music) return null;
  return (
    <div>
    <h3>{props.music.feed.entry[0]["im:name"].label}
    </h3>
    </div>
  )
}

export default MusicChartDetail;
