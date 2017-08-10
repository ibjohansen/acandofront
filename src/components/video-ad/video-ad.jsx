import React from 'react';
import PropTypes from 'prop-types';
import MediaAd from 'components/media-ad/media-ad';

class VideoAd extends React.Component {
  render() {
    const { mp4Url, webmUrl} = this.props;

    return (
      <MediaAd {...this.props}>
        <video className="video-bg" preload="meta" autoPlay={true} muted={true} loop={true}>
          {mp4Url && (
            <source
              src={mp4Url}
              type="video/mp4"
            />
          )}
          {webmUrl && (
            <source
              src={webmUrl}
              type="video/webm"
            />
          )}
          <span>Your browser does not support HTML5 video tag.</span>
        </video>
      </MediaAd>
      
    );
  }
}

VideoAd.propTypes = {
  location: PropTypes.any,
  mp4Url: PropTypes.string,
  webmUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  slogan: PropTypes.object,
  sloganStyling: PropTypes.object,
  headTitle: PropTypes.string,
  ogSiteName: PropTypes.string,
  ogUrl: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogVideoType: PropTypes.string,
  ogVideoWidth: PropTypes.string,
  ogVideoHeight: PropTypes.string
};

export default VideoAd;
