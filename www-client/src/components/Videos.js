import React, { Component } from 'react';
import Video from './Video';

const API = 'http://localhost:3001';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    const config = { headers: {} };

    if (this.props.auth.isAuthenticated()) {
      config.headers.Authorization = `Bearer ${this.props.auth.accessToken}`;
    }

    fetch(`${API}/videos`, config)
      .then(response => response.json())
      .then(data => this.setState({ videos: data }));
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        {videos.map(video =>
          <Video
            key={video.id}
            video={video}
            {...this.props}
          />
        )}
      </div>
    );
  }
}

export default Videos;