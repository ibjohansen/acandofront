import React from 'react';
import PropTypes from 'prop-types';
import MediaAd from 'components/media-ad/media-ad';
//import { getIosMajorVersion } from 'utils/device-detection';

class VideoAd extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      iosVersion: 10
    };
  }

  /*
    Want to test major version but cannot do it on didMount/willMount as it is not triggered
    on client. Don't think using react-no-ssr is wise to use here.
  */

  render() {
    const { mp4Url, webmUrl, videoFallback, videoFallbackPosX, videoFallbackPosY } = this.props;
    
    const gifStyling = {
      backgroundImage: `url("${videoFallback}")`,
      backgroundPositionX: videoFallbackPosX,
      backgroundPositionY: videoFallbackPosY
    };

    return (
      <MediaAd {...this.props}>
        {this.state.iosVersion >= 10 ? (
          <video className="video-bg" preload="metadata"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
          >
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
        ) : (
          <div className="gif-container" style={gifStyling} />
        )}
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
  ogVideoHeight: PropTypes.string,
  videoFallback: PropTypes.string,
  videoFallbackPosX: PropTypes.string,
  videoFallbackPosY: PropTypes.string
};

export default VideoAd;
