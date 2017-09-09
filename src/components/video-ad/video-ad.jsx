import React from 'react';
import PropTypes from 'prop-types';
import MediaAd from 'components/media-ad/media-ad';
//import { getIosMajorVersion } from 'utils/device-detection';

class VideoAd extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      iosVersion: 10,
      transform: 'none'
    };
    this.assignVideoElement = this.assignVideoElement.bind(this);
  }

  /* eslint-disable no-console */
  componentWillMount () {
    if (typeof window !== 'undefined') {
      this.resizeVideoAd();
    }
  }
  
  componentDidMount() {
    let resizeTimeout = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.resizeVideoAd();
      }, 100);
    });
  }

  assignVideoElement (element) {
    this.videoEl = element;
  }

  resizeVideoAd () {
    const width = parseInt(this.props.ogVideoWidth, 10);
    const height = parseInt(this.props.ogVideoHeight, 10);
    const aspectRatio = width/height;
    const viewportAspectRatio = window.innerWidth / window.innerHeight;
    
    let scale = 1;

    if (aspectRatio < viewportAspectRatio) {
      // viewport more widescreen than video aspect ratio
      scale = viewportAspectRatio / aspectRatio;
    } else if (viewportAspectRatio < aspectRatio) {
      // viewport more square than video aspect ratio
      scale = aspectRatio / viewportAspectRatio;
    }

    this.setState({
      transform: `scale(${scale})`,
      transformOrigin: `${this.props.focusX || 50}% ${this.props.focusY || 50}%`
    });
  }

  /* eslint-enable no-console */

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
    
    const videoStyling = {
      transform: this.state.transform,
      transformOrigin: this.state.transformOrigin
    };

    return (
      <MediaAd {...this.props}>
        {this.state.iosVersion >= 10 ? (
          <div className="video-bg-container">
            <video className="video-bg" preload="metadata"
              style={videoStyling}
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              ref={this.assignVideoElement}
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
          </div>
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
  videoFallbackPosY: PropTypes.string,
  focusX: PropTypes.number,
  focusY: PropTypes.number
};

export default VideoAd;
