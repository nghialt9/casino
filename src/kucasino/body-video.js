import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {
  state = {
    playing: true,
    source: 'https://www.youtube.com/watch?v=dmj2jgGMa5Y'
  };
  render() {
    return (
      <div className="video">
        <ReactPlayer playing={this.state.playing} url={this.state.source} pip controls width="70%" height="100%" />
      </div>
    )
  }
}

export default Video