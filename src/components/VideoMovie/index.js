import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';

const YoutubeEmbed = ({ videoId }) => (
  <div className="video">
    <iframe
      width="800"
      height="400"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enable_js=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
